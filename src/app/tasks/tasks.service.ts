import { Injectable, signal } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private taskList = signal<Task[]>([]);

  addNewTaskItem(taskItem: Task) {
    this.taskList.update((taskList) => [...taskList, taskItem]);
  }

  getTaskItem(taskId: string) {
    return this.taskList().find((elem) => elem.id == taskId);
  }

  getTask() {
    return this.taskList();
  }
}
