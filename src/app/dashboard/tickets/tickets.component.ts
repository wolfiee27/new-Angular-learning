import { Component } from '@angular/core';
import { NewTicketsComponent } from './new-tickets/new-tickets.component';
import { Ticket } from './ticket.model';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketsComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {
  ticketData: Ticket[] = [];
  onNewTicket(data: { title: string; request: string }) {
    const ticket: Ticket = {
      id: `${Math.random() * 1000}`,
      title: data.title,
      request: data.request,
      ticketStatus: 'online',
    };

    this.ticketData.push(ticket);
  }
}
