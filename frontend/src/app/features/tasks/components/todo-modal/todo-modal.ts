import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TaskForm } from './task-form/task-form';
import { ManagementTasks } from '../management-tasks/management-tasks';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-modal',
  imports: [CommonModule, TaskForm, ManagementTasks],
  templateUrl: './todo-modal.html',
  styleUrl: './todo-modal.css',
})
export class TodoModal {
  title: string = 'Minhas Tarefas';
  tasks: any[] = [];
  loading: boolean = true;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.loading = true;
    setTimeout(() => {
      this.todoService.getTasks().subscribe({
        next: (data: any) => {
          this.tasks = data;
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        },
      });
    }, 1000); // 1.5 segundos de delay
  }

  onTaskAdded(task: any) {
    this.tasks = [...this.tasks, task];
  }

  onTaskRemoved(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
