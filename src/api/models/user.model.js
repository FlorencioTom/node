const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const {
  validationPassword,
  validationEmail,
} = require("../../utils/validator.util");

const userSchema = new mongoose.Schema({
  email: { type: String, trim: true, required: true },
  password: { type: String, trim: true, required: true }
});

userSchema.pre("save", function (next) {
  if (!validationPassword(this.password)) {
    return next(setError("404", "La contraseña no cumple los requisitos"));
  }
  if (!validationEmail(this.email)) {
    return next(setError("404", "El email es incorrecto"));
  }

  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;