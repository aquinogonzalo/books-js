import express from 'express';
import 'dotenv/config';
import { connectToMongo } from './config/database.js';
import fileUpload from 'express-fileupload';
import morgan from 'morgan';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import path from 'node:path'
import { libroRouter } from './routes/libros.js';
import { autorRouter } from './routes/autores.js';
import { indexRoute } from './routes/index.routes.js';

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
    fileUpload({
        createParentPath: true,
        limits: { fileSize: 20 * 1024 * 1024 },
        abortOnLimit: true,
        responseOnLimit: "Archivo muy grande",
    })
);
app.use(morgan("tiny"));

// Settings
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.use('/libros', libroRouter);
app.use('/autores', autorRouter);
app.use(indexRoute);

// Servidor
app.listen(process.env.PORT, () => {
    connectToMongo()
    console.log(`Server run in port`, process.env.PORT);
})