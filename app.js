require("dotenv").config();
const express = require("express");
const app = express();

const userRouter = require("./api/atracciones/atracciones.router");


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json());
app.use("/", userRouter);
app.use("/atracciones", userRouter);
app.listen(process.env.APP_PORT, () => {
  console.log("Server up and running on PORT : ", process.env.APP_PORT);
});
