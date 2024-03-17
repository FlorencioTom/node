const mongoose = require("mongoose");

const pedidoSchema = new mongoose.Schema({
  articulo: {
    type: String,
    required: true,
  },
  unidades: {
    type: Number,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  fechaEntrega: {
    type: String,
    required: true,
  },
  cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cliente",
  },
});

const Pedido = mongoose.model("Pedido", pedidoSchema);

module.exports = Pedido;