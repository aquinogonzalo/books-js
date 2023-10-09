import { model, Schema } from 'mongoose'

const Autor = new Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    bibliografia: {
        type: String,
        required: true
    }       
}, {
    timestamps: true
});

const AutorModel = model('Autor', Autor);

export { AutorModel };