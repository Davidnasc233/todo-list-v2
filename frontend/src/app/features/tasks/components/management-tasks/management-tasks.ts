import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-management-tasks',
  imports: [],
  templateUrl: './management-tasks.html',
  styleUrl: './management-tasks.css',
})
export class ManagementTasks {
removerTask(arg0: any) {
throw new Error('Method not implemented.');
}
  @Input() tasks: any[] = [];
}
