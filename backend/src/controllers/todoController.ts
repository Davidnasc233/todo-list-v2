import * as repository from '../repositories/taskRepository';
import { Request, Response } from 'express';

export const getTasks = async (req: Request, res: Response) => {
  const tasks = await repository.getAll();
  res.json(tasks);
};

export const createTask = async (req: Request, res: Response) => {
  const { description, completed, priority } = req.body;
  if (!description || typeof completed !== 'boolean') {
    return res.status(400).json({ error: 'Descrição e status são obrigatórios' });
  }
  const newTask = await repository.create(description, completed, priority);
  return res.status(201).json(newTask);
};

export const deleteTask = async (req: Request, res: Response) => {
  const id = Number(req.params['id']);
  await repository.remove(id);
  return res.status(204).send('Task excluída com sucesso.');
};
export const updateTask = async (req: Request, res: Response) => {
  const id = Number(req.params['id']);
  const { completed, description, priority } = req.body;
  const updatedTask = await repository.update(id, { completed, description, priority });
  return res.json(updatedTask);
};
