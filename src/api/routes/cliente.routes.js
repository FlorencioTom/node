const express = require("express");
const clienteRouter = express.Router();
const { createCliente,
    getAllClientes,
    getClienteById,
    updateCliente,
    addClienteCover,
    deleteCliente} = require("../controllers/cliente.controller");
const { upload, uploadToCloudinary } = require('../middlewares/file.middleware')
const { isAuth } = require('../middlewares/auth.middleware')

// Ruta para crear un nuevo álbum
clienteRouter.post("/", [ isAuth, upload.single('coverImage')], createCliente);
clienteRouter.get("/", getAllClientes);
clienteRouter.get("/:id", getClienteById);
clienteRouter.put("/:id", updateCliente);
clienteRouter.patch("/:id", updateCliente);
clienteRouter.patch("/cover/:id", [upload.single('coverImage'), uploadToCloudinary], addClienteCover);
clienteRouter.delete("/:id", deleteCliente);

module.exports = clienteRouter;
