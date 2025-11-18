import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-management-tasks',
  imports: [],
  templateUrl: './management-tasks.html',
  styleUrl: './management-tasks.css',
})
export class ManagementTasks {
  @Input() tasks: any[] = [];
  @Output() taskRemoved = new EventEmitter<number>();

    constructor(
      private todoService: TodoService
    ) {}

  removerTask(id: number) {
    this.todoService.deleteTask(id).subscribe({
      next: () => {
        this.taskRemoved.emit(id); // Notifica o componente pai para atualizar a lista
      },
      error: (err) => {
        // Trate o erro se necessário
        console.error('Erro ao remover tarefa:', err);
      }
    });
  }
}
