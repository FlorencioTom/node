const multer = require('multer'); // npm i multer
const path = require('path');
const fs = require('fs');
require("dotenv").config();
const cloudinary = require('cloudinary').v2
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
    secure: false
});

const storage = multer.diskStorage({ //le decimos a multer que junte el nombre del archivo mas la fecha de ahora
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
    destination: (req, file, cb) => {//varible de entorno que te dice donde estas ahora mismo
        const folder = path.join(__dirname, '../../../public/uploads');
        console.log(folder)
        cb(null, folder);
    },
    onError: function (error, next) {
        console.error('storage error', error);
        next(error);
    },
    createParentPath: true
})

const VALID_FILE_TYPES = ['image/png', 'image/jpg', 'image/jpeg'];

const fileFilter = (req, file, cb) => {
    if (!VALID_FILE_TYPES.includes(file.mimetype)) {
        const error = new Error('File type not supported');
        cb(error);
    } else {
        cb(null, true);
    }
}

const upload = multer({ storage, fileFilter });

const uploadToCloudinary = async (req, res, next) => {
    if (req.file) {
        try {
            const image = await cloudinary.uploader.upload(req.file.path);
            await fs.unlinkSync(req.file.path)
            req.file_url = image.secure_url;
            return next()
        } catch (error) {
            return next(error)
        }
    }
}

module.exports = { upload, uploadToCloudinary }