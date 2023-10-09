import { LibroModel } from '../models/libro.js';
import { AutorModel } from '../models/autor.js';

// crear libro
export const ctrlCreateNewLibro = async (req, res) => {
    const { titulo, autor, genero, year } = req.body

    const autorId = await AutorModel.findById(autor)

    if (!autorId) {
        return res.status(404).json({ message: 'Autor no encontrado' })
    }

    try {
        const newLibro = new LibroModel({
            titulo,
            autor: autorId,
            genero,
            year
        })

        await newLibro.save()

        res.status(201).json({ message: 'Libro creado correctamente', newLibro })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al crear el libro' })
    }
}

// obtener todos los libros
export const ctrlGetAllLibros = async (req, res) => {
    try {
        const allLibros = await LibroModel.find()

        if (!allLibros) {
            return res.status(404).json({ message: 'Libros no encontrados' })
        }

        res.status(200).json({ message: 'Libros encontrados', allLibros })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al obtener los libros' })
    }
}

// obtener un libro
export const ctrlGetLibroById = async (req, res) => {
    const libroId = req.params.id

    try {
        const libro = await LibroModel.findById(libroId)

        if (!libro) {
            return res.sendStatus(404).json({ message: 'Libro no encontrado' })
        }

        res.status(200).json({ message: 'Libro encontrado', libro })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al obtener el libro' })
    }
}

// actualizar libro
export const ctrlUpdateLibro = async (req, res) => {
    const libroId = req.params.id
    const { titulo, genero, year, autor } = req.body

    try {
        const updateLibro = await LibroModel.findByIdAndUpdate(libroId, { titulo, genero, year, autor })

        if (!updateLibro) {
            return res.sendStatus(404).json({ message: 'Libro no encontrado' })
        }

        res.status(200).json({ message: 'Libro actualizado correctamente', updateLibro })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al actualizar el libro' })
    }
}

// eliminar libro
export const ctrlDeleteLibro = async (req, res) => {
    const libroId = res.params.id

    try {
        const deleteLibro = await LibroModel.findByIdAndDelete(libroId)
        if (!deleteLibro) {
            return res.sendStatus(404).json({ message: 'Libro no encontrado' })
        }
        res.status(200).json({ message: 'Libro eliminado correctamente' })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al eliminar el libro' })
    }
}


//Traer libros por genero
export const ctrlGetLibrosByGenero = async (req, res) => {
    const genero = req.params.genero
    try {
        const libros = await LibroModel.find({ genero })
        if (!libros) {
            return res.sendStatus(404).json({ message: 'genero no encontrado' })
        }
        res.status(200).json(libros)
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al obtener los libros' })
    }
}


