import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';


import { TaskComponent } from './task/task.component';
import { TasksComponent } from './tasks.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { CardComponent } from '../shared/card/card.component';
import { SharedModule } from '../shared/shared.Module';

@NgModule({ declarations: [TasksComponent, TaskComponent, AddTaskComponent] , 
    exports:[TasksComponent], 
    imports:[CommonModule, FormsModule, SharedModule ]
})
export class TasksModule {}
