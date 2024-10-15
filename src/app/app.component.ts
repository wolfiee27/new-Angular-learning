import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { User } from './user/user.model';


// import { HeaderComponent } from "./header/header.component";
// import { UserComponent } from "./user/user.component";
// import { TasksComponent } from "./tasks/tasks.component";



@Component({
  selector: 'app-root',
  standalone: false,
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
