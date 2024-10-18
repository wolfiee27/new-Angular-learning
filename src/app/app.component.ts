import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { ServerStatusComponent } from "./daskboard/server-status/server-status.component";
import { TrafficComponent } from "./daskboard/traffic/traffic.component";
import { TicketsComponent } from "./daskboard/tickets/tickets.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, ServerStatusComponent, TrafficComponent, TicketsComponent],
})
export class AppComponent {

}
