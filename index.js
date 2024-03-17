const express = require("express");
const cors = require("cors");
const { connectMongo } = require("./src/data/mongo");
//const { configCloudinary } = require("./src/utils/cloudinary/config");
const userRouter = require("./src/api/routes/user.routes");
const clienteRouter = require("./src/api/routes/cliente.routes");
const pedidoRouter = require("./src/api/routes/pedido.routes");
const { notFoundHandler, errorHandler } = require('./src/api/middlewares/error.middleware');
require("dotenv").config(); // desde aquí se cargan las var de entorno del .env, hasta aquí no existen

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // usar urlencode para las urls.
connectMongo();
//configCloudinary();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.use(cors()); // no hay restricciones

app.get("/", (req, res) => {
  res.send("El servidor está en marcha");
});
app.use("/user", userRouter);
app.use("/cliente", clienteRouter);
app.use("/pedido", pedidoRouter);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`El servidor esta escuchando el puerto : ${PORT}`);
});
