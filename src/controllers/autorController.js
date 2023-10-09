import { AutorModel } from '../models/autor.js';

// crear autor
export const ctrlCreateNewAutor = async (req, res) => {
    const { name, lastName, bibliografia } = req.body

    try {
        const newAutor = new AutorModel({ name, lastName, bibliografia })
        await newAutor.save()
        res.status(201).json({ message: 'Autor creado correctamente', newAutor })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al crear el autor' })
    }
}

// obtener todos los autores
export const ctrlGetAllAutores = async (req, res) => {
    try {
        const allAutores = await AutorModel.find()
        res.status(200).json(allAutores)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al obtener los autores' })
    }
}

// obtener un autor
export const ctrlGetAutorById = async (req, res) => {
    const autorId = req.body.id

    try {
        const autor = await AutorModel.findById(autorId)
        if(!autor) {
            return res.sendStatus(403)
        }
        res.status(200).json(autor)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al obtener el autor' }) 
    }
}

// actualizar autor
export const ctrlUpdateAutor = async (req, res) => {
    const autorId = req.params.id
    const { name, lastName, bibliografia } = req.body
    try {
        await AutorModel.findByIdAndUpdate(autorId, { name, lastName, bibliografia })
        res.status(200).json({message: 'Autor actualizado'})
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al actualizar el autor' })    
    }
}

// eliminar autor
export const ctrlDeleteAutor = async (req, res) => {
    const autorId = req.params.id
    try {
        await AutorModel.findByIdAndDelete(autorId)
        res.status(200).json({message: 'Autor eliminado'})
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al eliminar el autor' })    
    }
}