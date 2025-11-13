import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoModal } from "./features/tasks/components/todo-modal/todo-modal";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoModal],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
