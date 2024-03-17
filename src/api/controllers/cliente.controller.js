const Cliente = require("../models/cliente.model");
const { HTTPSTATUSCODE } = require("../../utils/httpStatusCode");

const createCliente = async (req, res, next) => {
  try {
    
    
    const { id, nombre, direccion, email} = req.body;
    const coverImage = req.file ? req.file.path : '';
    const cliente = await Cliente.create({
        id, 
        nombre, 
        direccion, 
        email,
        coverImage
    });
    res.status(201).json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      data: cliente,
    });
  } catch (error) {
    next(error);
  }
};

const getAllClientes = async (req, res, next) => {
  try {
    const clientes = await Cliente.find();
    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: clientes,
    });
  } catch (error) {
    next(error);
  }
};

const getClienteById = async (req, res, next) => {
  try {
    const cliente = await Cliente.findById(req.params.id);
    if (cliente) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: cliente,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: HTTPSTATUSCODE[404],
      });
    }
  } catch (error) {
    next(error);
  }
};

const updateCliente = async (req, res, next) => {
  try {
    const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (cliente) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: cliente,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: HTTPSTATUSCODE[404],
      });
    }
  } catch (error) {
    next(error);
  }
};

const addClienteCover = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        status: 400,
        message: 'No se encuentra el archivo.'
      });
    }
    const cliente = await Cliente.findByIdAndUpdate(
      req.params.id,
      { coverImage: req.file.path },
      { new: true }
    );

    if (cliente) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: cliente,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: HTTPSTATUSCODE[404],
      });
    }
  } catch (error) {
    next(error);
  }
};

const deleteCliente = async (req, res, next) => {
  try {
    const cliente = await Cliente.findByIdAndDelete(req.params.id);
    if (cliente) {
      res.status(204).json({
        status: 204,
        message: HTTPSTATUSCODE[204],
      });
    } else {
      res.status(404).json({
        status: 404,
        message: HTTPSTATUSCODE[404],
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createCliente,
  getAllClientes,
  getClienteById,
  updateCliente,
  addClienteCover,
  deleteCliente,
};