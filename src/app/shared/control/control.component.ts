import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  host: {
    class: 'control',
  },
})
export class ControlComponent {
  // @HostBinding('class') class = 'control'
  // @HostListener('click') onClick(){
  //   console.log("clicked")
  // }

  // private hostElem = inject(ElementRef)
  // onClick(){
  //     console.log(this.hostElem)
  //   }
  label = input.required<string>();
}
