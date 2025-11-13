import db from '../../database/db';
import { TaskDto } from "../dto/taskDto";

// Buscar todas as tasks
export async function getAll(): Promise<TaskDto[]> {
  return await db<TaskDto>('tasks').select('*');
}

// Criar uma nova task
export async function create(description: string, completed: boolean): Promise<TaskDto> {
  const [id] = await db('tasks').insert({ description, completed });
  return { id, description, completed };
}

// Remover uma task
export async function remove(id: number): Promise<void> {
  await db('tasks').where({ id }).del();
}