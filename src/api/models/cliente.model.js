const mongoose = require("mongoose");

// Definición del esquema del álbum
const clienteSchema = new mongoose.Schema({
    /*id: {
        type: String,
        required: true,
    },*/
    nombre: {
        type: String,
        required: true,
    },
    direccion: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    coverImage: {
        type: String,
        required: false,
    },
});

const Cliente = mongoose.model("Cliente", clienteSchema);

module.exports = Cliente;