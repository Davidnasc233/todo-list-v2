import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-task-form',
  imports: [CommonModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm {
  priority = [
    { id: 0, risco: 'Baixa', color: '#008000' }, // Green for low
    { id: 1, risco: 'Média', color: '#FFA500' }, // Orange for medium
    { id: 2, risco: 'Alta', color: '#FF0000' },  // Red for high
  ];
selectedPriority: any;
}
