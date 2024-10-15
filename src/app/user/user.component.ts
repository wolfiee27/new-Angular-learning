import { Component, computed, EventEmitter, Input, Output, signal } from '@angular/core';
import { CardComponent } from '../shared/card/card.component';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
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

