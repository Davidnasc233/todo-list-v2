import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../../../services/task.service';
import { Task } from '../../../models/task.model';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm {
  priority = [
    { id: 0, risco: 'Baixa', color: '#008000' },
    { id: 1, risco: 'Média', color: '#FFA500' },
    { id: 2, risco: 'Alta', color: '#FF0000' },
  ];

  taskForm: FormGroup;

  @Output() taskAdded = new EventEmitter<Task>();

  constructor(private taskService: TaskService, private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required, this.invalidSpecialChar]],
      description: ['', [Validators.required, this.invalidSpecialChar]],
      selectedPriority: [this.priority[0], Validators.required],
      completed: [false],
    });
  }

  addTask() {
    if (this.taskForm.invalid) return;
    const formValue = this.taskForm.value;
    const newTask = {
      title: formValue.title,
      description: formValue.description,
      completed: formValue.completed,
      priority: formValue.selectedPriority?.id,
    };
    this.taskService.createTask(newTask).subscribe((task: Task) => {
      this.taskAdded.emit(task);
      return this.cleanForm();
    });
  }

  cleanForm() {
    this.taskForm.reset({
      title: '',
      description: '',
      selectedPriority: this.priority[0],
      completed: false,
    });
  }

  invalidSpecialChar(control: AbstractControl): ValidationErrors | null {
    const value = control.value || '';
    const regex = /^(?!.*[<>])(?=.*\S).+$/;
    if (!regex.test(value)) {
      return { noHtmlAndNoSpaces: true };
    }
    return null;
  }
}
