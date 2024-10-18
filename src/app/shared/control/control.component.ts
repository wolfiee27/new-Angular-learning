import { Component, HostBinding, HostListener, input } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  host:{
    'class':'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent {
  // @HostBinding('class') class = 'control'
  // @HostListener('click') onClick(){
  //   console.log("clicked")
  // }

  onClick(){
      console.log("clicked")
    }
  label = input.required<string>()
}
