import express from "express";
import mongoose from "mongoose"
import { router } from "./caminhos.js";

const app = express();
const port = 3000;
mongoose.connect(
  "mongodb+srv://bidaaa:Queimada2017@lions.7omh0jl.mongodb.net/?retryWrites=true&w=majority&appName=Lions"
)

mongoose.connection.once("open", () => {
  console.log("Conectado ao MongoDB")
})

mongoose.connection?.on('error', (err) => {
  console.error(`Error to connect - MongoDB: Error: ${err.message}`)
})

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});