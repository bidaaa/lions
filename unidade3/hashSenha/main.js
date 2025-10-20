import dotenv from "dotenv"
dotenv.config()
import express from "express"
import mongoose from "mongoose"
import { router } from "./caminhos.js"

const app = express();
const port = 3000;

const PepServer = async () => {
  try {
    await mongoose.connect(process.env.a);
    console.log("Conectado ao MongoDB.");
    mongoose.connection.on("error", (err) => {
      console.error(`Erro de conexão com o MongoDB: ${err.message}`);
    });

    app.use(express.json());
    app.use(router);

    app.listen(port, () => {
      console.log(`🚀 Servidor iniciado na porta ${port}`);
    });
  } catch (err) {
    console.error(
      "Falha ao conectar"
    );
    console.error(err.message);
    process.exit(1);
  }
};

PepServer();