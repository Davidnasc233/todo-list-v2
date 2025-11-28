import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import { Loading } from '../../../../shared/components/loading/loading';

@Component({
  selector: 'app-management-tasks',
  imports: [Loading],
  templateUrl: './management-tasks.html',
  styleUrl: './management-tasks.css',
})
export class ManagementTasks {
  @Input() tasks: any[] = [];
  @Input() loading: boolean = false;
  @Output() taskRemoved = new EventEmitter<number>();
  TaskService: any;

  constructor(private todoService: TodoService, private taskService: TaskService) {}

  removerTask(id: number) {
    this.todoService.deleteTask(id).subscribe({
      next: () => {
        this.taskRemoved.emit(id);
      },
      error: (err) => {
        console.error('Erro ao remover tarefa:', err);
      },
    });
  }

  toggleCompleted(task: Task) {
    const updated = { completed: !task.completed };
    this.taskService.updateTask(task.id, updated).subscribe({
      next: (updatedTask) => {
        task.completed = updatedTask.completed;
      },
      error: (err) => {
        console.error('Erro ao atualizar tarefa:', err);
      },
    });
  }
}
