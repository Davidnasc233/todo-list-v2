import { TaskDto } from "../dto/taskDto";

let tasks: TaskDto[] = [];

export const getAll = () => tasks;

export const create = ( description: string, done: boolean) => {
    const newTask: TaskDto = { id: tasks.length + 1, description, done };
    tasks.push(newTask);
    return newTask
};

export const remove = (id: number) => {
    tasks = tasks.filter(task => task.id !==id);
}; 