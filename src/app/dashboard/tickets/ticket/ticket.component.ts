import {
  Component,
  EventEmitter,
  Input,
  input,
  Output,
  signal,
} from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  // @Input({ required: true }) data!: Ticket;
  data = input.required<Ticket>();
  toggleVisiblity = signal<boolean>(false);
  @Output() ticketStatus = new EventEmitter<string>(false);

  onToggleVisiblity() {
    this.toggleVisiblity.update((prev) => !prev);
  }

  onCompleted() {
    this.ticketStatus.emit(this.data().id);
    this.onToggleVisiblity();
  }
}
