const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { setError } = require("../../utils/error.util");
const { HTTPSTATUSCODE } = require("../../utils/httpStatusCode");

const register = async (req, res, next) => {
  try {
    const user = new User(req.body);

    const userExist = await User.findOne({ email: user.email });
    if (userExist) {
      return next(setError("404", "Email ya ha sido usado."));
    }
    const userDB = await user.save();
    return res.status(201).json({
      status: 201,
      message: `User ${userDB.email} creado`,
    });
  } catch (error) {
    return next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const userInfo = await User.findOne({ email: req.body.email});
    console.log(bcrypt.compareSync(req.body.password, userInfo.password));
    if (bcrypt.compareSync(req.body.password, userInfo.password)) {
      userInfo.password = "*************"; // ocultamos el dato password en la respuesta por seguridad
      const token = jwt.sign(
        {
          id: userInfo._id,
          email: userInfo.email
        },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );

      return res.status(200).json({
        data: { massage: HTTPSTATUSCODE[200], user: userInfo, token: token },
      });
    } else {
      return res.json({
        status: 400,
        message: HTTPSTATUSCODE[400],
        data: null,
      });
    }
  } catch (error) {
    return next(error);
  }
};

const logout = (req, res, next) => {
  try {
    const token = null;
    return res.status(200).json({
      status: 200,
      message: "Logout correcto",
    });
  } catch (error) {
    return next(setError(error.statusCode, "Error en Logout"));
  }
};

module.exports = { register, login, logout };