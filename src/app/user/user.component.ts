import { Component, computed, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})


export class UserComponent {
  @Input({required: true}) user!: User
  @Input({required: true}) selected: Boolean = true;

  
  @Output() select = new EventEmitter<string>();
  
  onClickUser(){
    this.select.emit(this.user.id);
  }
}

