import { Injectable, signal } from '@angular/core';
import { Task } from './task.model';

// @Injectable({
//   providedIn: '',
// })
export class TaskService {
  private taskList = signal<Task[]>([]);
  allTask = this.taskList.asReadonly();
  addNewTaskItem(taskItem: Task) {
    this.taskList.update((taskList) => [...taskList, taskItem]);
  }

  updateTask(updatedtask: Task) {
    this.taskList.update((oldTask) => {
      return oldTask.map((task) =>
        task.id === updatedtask.id ? { ...updatedtask } : task
      );
    });
  }

  getTaskItem(taskId: string) {
    return this.taskList().find((elem) => elem.id == taskId);
  }

  getTask() {
    return this.taskList.asReadonly();
  }
}
