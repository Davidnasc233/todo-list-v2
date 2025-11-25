import db from '../../database/db';
import { TaskDto } from '../dto/taskDto';

// Buscar todas as tasks
export async function getAll(): Promise<TaskDto[]> {
  return await db<TaskDto>('tasks').select('*');
}

// Criar uma nova task
export async function create(
  description: string,
  completed: boolean,
  priority: number
): Promise<TaskDto> {
  const [id] = await db('tasks').insert({ description, completed, priority });
  return { id, description, completed, priority };
}

// Remover uma task
export async function remove(id: number): Promise<void> {
  await db('tasks').where({ id }).del();
}

// Atualizar uma task
export async function update(id: number, changes: Partial<TaskDto>): Promise<TaskDto> {
  await db('tasks').where({ id }).update(changes);
  const updated = await db('tasks').where({ id }).first();
  return updated;
}
