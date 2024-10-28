import { Component, ElementRef, Inject, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../task.model';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');
  @Inject(TaskService) TaskService
  onAddTask(title: string, description: string) {
    const newTask: Task = {
      description,
      title,
      id: `${new Date().toISOString}`,
      status: 'OPEN',
    };

    this.formEl()?.nativeElement.reset();
  }
}
