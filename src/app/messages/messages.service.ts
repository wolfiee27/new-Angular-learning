import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  private messagesList = signal<string[]>([]);
  public allMessages = this.messagesList.asReadonly();

  addMessage(newMessage: string) {
    this.messagesList.update((oldMessages) => [...oldMessages, newMessage]);
  }
}
