import { Component } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";

@Component({
  selector: 'app-new-tickets',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './new-tickets.component.html',
  styleUrl: './new-tickets.component.css'
})
export class NewTicketsComponent {


  onSubmit(){

  }
}
