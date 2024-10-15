import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";
import { User } from './user/user.model';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUser: User = {avatar:'', id:'', name:''};

  isSelected(user: User){ 
    return user.id === this.selectedUser?.id;
  }

  onSelect(id: string){
    this.selectedUser = this.users.find(elem => elem.id == id )!;
  }
  // onTaskCompletion(id: string){
  //   this.users =  this?.users?.filter(elem => elem.id != id)!;
  // }
}
