import { Component, Input } from '@angular/core';
import { type Task } from './task/task.model'
import { TaskService } from './task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {
  @Input() name!: string;
  @Input() userId!: string;
  isNewTasKAdding: Boolean = false;
  
  constructor(public taskService: TaskService) {
    
  }

  getSelectedUser = (): Array<Task> => { 
    return this.taskService.getUserTasks(this.userId)
  }
  
  onNewTaskChangeStatus(status: boolean){
    this.isNewTasKAdding = status;
  }

  onAddNewTask(){
    this.isNewTasKAdding = true;
  }

}
