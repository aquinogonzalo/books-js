import { Router } from 'express';
import {
    ctrlCreateNewAutor,
    ctrlDeleteAutor,
    ctrlGetAutorById,
    ctrlUpdateAutor,
    ctrlGetAllAutores
} from '../controllers/autorController.js'

const autorRouter = Router()

// ver todos los autores
autorRouter.get('/', ctrlGetAllAutores);

// ver un autor
autorRouter.get('/:id', ctrlGetAutorById);

// crear un autor
autorRouter.post('/', ctrlCreateNewAutor);

// actualizar un autor
autorRouter.put('/:id', ctrlUpdateAutor);

// eliminar un autor
autorRouter.delete('/:id', ctrlDeleteAutor);

export { autorRouter };

