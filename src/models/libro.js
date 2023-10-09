import { model, Schema } from 'mongoose'

const Libro = new Schema({
    titulo: {
        type: String,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    autor: [{
        type: String,
        ref: "Autor",
        required: true
    }],
    year: {
        type: Number,
        required: true
    },
    portrait: {
        type: String,
        required: false
    }
}, {
    timestamps: true
})

const LibroModel = model('Libro', Libro)

export { LibroModel }

