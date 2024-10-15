import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TaskComponent } from "./tasks/task/task.component";
import { TasksComponent } from "./tasks/tasks.component";
import { CardComponent } from "./shared/card/card.component";
import { AddTaskComponent } from "./tasks/add-task/add-task.component";
import { DatePipe } from "@angular/common";
import { SharedModule } from "./shared/shared.Module";

@NgModule({
    declarations: [AppComponent, HeaderComponent, UserComponent, TaskComponent, TasksComponent, AddTaskComponent ],
    bootstrap:[AppComponent],
    imports: [BrowserModule, FormsModule, DatePipe, SharedModule]
})
export class AppModule{

}