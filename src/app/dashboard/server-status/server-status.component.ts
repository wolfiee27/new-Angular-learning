import { Component, effect, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('online');
  private timeout?: ReturnType<typeof setInterval>;
  constructor() {
    effect(() => {
      console.log('currentServerStaus- ' + this.currentStatus());
    });
  }

  ngOnInit(): void {
    this.timeout = setInterval(() => {
      const rand = Math.random();
      if (rand < 0.5) {
        this.currentStatus.set('online');
      } else if (rand < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 4000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timeout);
  }
}
