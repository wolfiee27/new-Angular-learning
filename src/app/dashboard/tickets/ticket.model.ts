export interface Ticket {
  id: string;
  title: string;
  request: string;
  ticketStatus: 'online' | 'offline';
}
