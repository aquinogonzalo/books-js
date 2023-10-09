import { Router } from 'express'
import {
    ctrlGetAllLibros,
    ctrlGetLibroById,
    ctrlGetLibrosByGenero,
    ctrlDeleteLibro,
    ctrlUpdateLibro,
    ctrlCreateNewLibro,
} from '../controllers/libroController.js'

const libroRouter = Router()

// ver todos los libros
libroRouter.get('/', ctrlGetAllLibros);

// ver un libro
libroRouter.get('/:id', ctrlGetLibroById);

// crear un libro
libroRouter.post('/', ctrlCreateNewLibro);

// actualizar un libro
libroRouter.put('/:id', ctrlUpdateLibro);

// eliminar un libro
libroRouter.delete('/:id', ctrlDeleteLibro);

// ver libros por genero
libroRouter.get('/genero/:genero', ctrlGetLibrosByGenero);


export { libroRouter };