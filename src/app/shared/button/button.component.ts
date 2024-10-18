import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'button[appButton]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  encapsulation: ViewEncapsulation.None,
  host:{
    class:"control"
  }
})

export class ButtonComponent {
  text = input.required<string>()
  icon = input.required<string>()
}
