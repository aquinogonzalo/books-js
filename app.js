import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'


const app = express();

app.use(express.json())
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST']
}))
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
app.use(morgan('dev'))
app.use(helmet())


app.listen(3000, () => {
    console.log('Server started on port 3000')
})