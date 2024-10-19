import {
  Component,
  contentChild,
  ContentChild,
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
    '(click)': 'onClick()',
  },
})
export class ControlComponent {
  // @ContentChild('input') control?: ElementRef<
  //   HTMLInputElement | HTMLTextAreaElement
  // >;

  control =
    contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');
  label = input.required<string>();

  onClick() {
    console.log(this.control()?.nativeElement);
  }
}
