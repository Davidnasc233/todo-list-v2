import { Injectable } from "@angular/core";
import { environment } from "../../../../../environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getTasks() {
    return this.http.get(`${this.apiUrl}/tasks`);
  }

  createTask(task: { description: string; completed: boolean }) {
    return this.http.post(`${this.apiUrl}/tasks`, task);
  }

  deleteTask(id: number) {
    return this.http.delete(`${this.apiUrl}/tasks/${id}`);
  }

}
