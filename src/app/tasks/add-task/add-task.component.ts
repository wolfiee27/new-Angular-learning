import { Component, EventEmitter, Input, Output,inject  } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  @Input({required:true}) userId!: string;
  @Output() close = new EventEmitter<boolean>();
  private taskService =  inject(TaskService);

  title='';
  summary='';
  dueDate='';

  onCloseNewTaskCreation() {
    this.close.emit(false);
  }

  onCompleteNewTaskCreation() {
    this.taskService.addNewTask({
      title:this.title,
      summary:this.summary,
      dueDate:this.dueDate,
    }, this.userId)
    this.close.emit(false);
  }

}
