import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../../../services/task.service';
import { Task } from '../../../models/task.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm {
  priority = [
    { id: 0, risco: 'Baixa', color: '#008000' },
    { id: 1, risco: 'Média', color: '#FFA500' },
    { id: 2, risco: 'Alta', color: '#FF0000' },
  ];

  form = {
    description: '',
    selectedPriority: this.priority[0],
    completed: false,
  };

  @Output() taskAdded = new EventEmitter<Task>();

  get isInputFilled(): boolean {
    return !!this.form.description && this.form.description.trim().length > 0;
  }

  constructor(private taskService: TaskService) {}

  addTask() {
    if (!this.form.description) return;
    const newTask = {
      description: this.form.description,
      completed: this.form.completed,
      priority: this.form.selectedPriority?.id,
    };
    this.taskService.createTask(newTask).subscribe((task: Task) => {
      this.taskAdded.emit(task);
      this.form.description = '';
      this.form.selectedPriority = this.priority[0];
    });
  }

  cleanForm() {
    this.form.description = '';
    this.form.selectedPriority = this.priority[0];
    this.form.completed = false;
  }
}
