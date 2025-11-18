import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-management-tasks',
  imports: [],
  templateUrl: './management-tasks.html',
  styleUrl: './management-tasks.css',
})
export class ManagementTasks {
  @Input() tasks: any[] = [];
}
