import * as repository from '../repositories/taskRepository';
import { Request, Response } from 'express';

export const getTasks = ( req: Request, res: Response ) => {
  res.json(repository.getAll());
};

export const createTask = ( req: Request, res: Response ) => {
    const { description, done } = req.body;
    if ( !description || typeof done !=='boolean' ) {
        return res.status(400).json({ error: 'Descrição e status são obrigatórios'})
    }
    const newTask = repository.create( description, done );
    return res.status(201).json(newTask); 
};

export const deleteTask = ( req: Request, res: Response ) => {
    const id = Number(req.params['id']);
    repository.remove(id);
    return res.status(204).send('Task excluída com sucesso.')
};