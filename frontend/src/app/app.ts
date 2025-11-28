import { Component, signal } from '@angular/core';
import { TodoModal } from "./features/tasks/components/todo-modal/todo-modal";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TaskForm } from './features/tasks/components/todo-modal/task-form/task-form';
import { ManagementTasks } from './features/tasks/components/management-tasks/management-tasks';
import { CommonModule } from '@angular/common';
import { Header } from "./shared/components/loading/header/header";

@Component({
  selector: 'app-root',
  imports: [CommonModule, HttpClientModule, TodoModal, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
