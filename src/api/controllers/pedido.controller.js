const Pedido = require("../models/pedido.model");
const { HTTPSTATUSCODE } = require("../../utils/httpStatusCode");

const createPedido = async (req, res, next) => {
  console.log(req.headers.authorization);
  try {
    const pedido = await Pedido.create(req.body);
    res.status(201).json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      data: pedido,
    });
  } catch (error) {
    next(error);
  }
};

const getAllPedidos = async (req, res, next) => {
  try {
    const pedidos = await Pedido.find().populate('cliente');
    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: pedidos,
    });
  } catch (error) {
    next(error);
  }
};

const getPedidoById = async (req, res, next) => {
  try {
    const pedido = await Pedido.findById(req.params.id).populate('cliente');
    if (pedido) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: pedido,
      });
    } else {
      res.status(404).json({ status: 404, message: "Pedido no encontrado" });
    }
  } catch (error) {
    next(error);
  }
};

const updatePedido = async (req, res, next) => {
  try {
    const pedido = await Pedido.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (pedido) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: pedido,
      });
    } else {
      res.status(404).json({ status: 404, message: "Pedido no encontrado" });
    }
  } catch (error) {
    next(error);
  }
};

const deletePedido = async (req, res, next) => {
  try {
    const pedido = await Pedido.findByIdAndDelete(req.params.id);
    if (pedido) {
      res.status(204).json({ status: 204, message: "Pedido eliminado" });
    } else {
      res.status(404).json({ status: 404, message: "Pedido no encontrado" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createPedido,
  getAllPedidos,
  getPedidoById,
  updatePedido,
  deletePedido,
};
