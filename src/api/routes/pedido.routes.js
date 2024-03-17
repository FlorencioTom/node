const express = require("express");
const pedidoRouter = express.Router();
const {
  createPedido,
  getAllPedidos,
  getPedidoById,
  updatePedido,
  deletePedido,
} = require("../controllers/pedido.controller");
const { isAuth } = require('../middlewares/auth.middleware');

pedidoRouter.post("/", createPedido);
pedidoRouter.get("/", getAllPedidos);
pedidoRouter.get("/:id", getPedidoById);
pedidoRouter.patch("/:id", updatePedido);
pedidoRouter.delete("/:id", deletePedido);

module.exports = pedidoRouter;