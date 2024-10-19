import {
  AfterContentInit,
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  OnInit,
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
export class ControlComponent implements OnInit, AfterContentInit {
  // @ContentChild('input') control?: ElementRef<
  //   HTMLInputElement | HTMLTextAreaElement
  // >;

  control =
    contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');
  label = input.required<string>();

  ngOnInit(): void {
    console.log('control-ngOnInit', this.control()?.nativeElement);
  }
  ngAfterContentInit(): void {
    console.log('control-ngAfterContentInit', this.control()?.nativeElement);
  }

  onClick() {
    console.log(this.control()?.nativeElement);
  }
}
