import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-modal',
  imports: [CommonModule],
  templateUrl: './todo-modal.html',
  styleUrl: './todo-modal.css',
})
export class TodoModal {
  title: string = 'Minhas Tarefas';
  taskDescription: string = 'teste';

  tasks = [
    { id: 1, description: 'Teste 1', completed: 0 },
    { id: 2, description: 'Teste 2', completed: 1 },
    { id: 3, description: 'Teste 3', completed: 0 },
  ];

  removerTask(id: number) {
   this.tasks = this.tasks.filter(task => task.id !== id)
  }
}
