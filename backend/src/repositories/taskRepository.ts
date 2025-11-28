import db from '../../database/db';
import { TaskDto } from '../dto/taskDto';

export class TaskRepository {
  static async getAll(): Promise<TaskDto[]> {
    return await db<TaskDto>('tasks').whereNull('deleted_at').select('*');
  }

  static async create(description: string, completed: boolean, priority: number): Promise<TaskDto> {
    const [id] = await db('tasks').insert({
      description,
      completed,
      priority,
      created_at: new Date(),
      // updated_at intentionally omitted
    });
    return {
      id,
      description,
      completed,
      priority,
      created_at: new Date(),
      deleted_at: null,
      updated_at: null,
    };
  }

  static async remove(id: number): Promise<void> {
    await db('tasks').where({ id }).update({ deleted_at: new Date() });
  }

  static async update(id: number, changes: Partial<TaskDto>): Promise<TaskDto> {
    await db('tasks')
      .where({ id })
      .update({
        ...changes,
        updated_at: new Date(),
      });
    const updated = await db('tasks').where({ id }).first();
    return updated;
  }
}
