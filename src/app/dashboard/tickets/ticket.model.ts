export interface Ticket {
  id: string;
  title: string;
  request: string;
  ticketStatus: 'open' | 'closed';
}
