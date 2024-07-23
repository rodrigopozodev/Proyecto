import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes";
import { connectDB } from "./config/sqlite";
const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

// Conectar a la base de datos
connectDB().then(() => console.log("Conexión lista"));

app.listen(PORT, () => console.log(`Servidor listo en el puerto ${PORT}`));
