import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TaskForm } from "./task-form/task-form";
import { ManagementTasks } from "../management-tasks/management-tasks";
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-modal',
  imports: [CommonModule, TaskForm, ManagementTasks],
  templateUrl: './todo-modal.html',
  styleUrl: './todo-modal.css',
})
export class TodoModal {
  title: string = 'Minhas Tarefas';
  taskDescription: string = 'teste';

  tasks = [];

  constructor(
    private todoService: TodoService
  ) {}

  ngOnInit() {
    this.todoService.getTasks().subscribe((data: any) => {
      this.tasks = data;
    });
  }

  // removerTask(id: number) {
  //  this.tasks = this.tasks.filter(task => task.id !== id)
  // }

}


