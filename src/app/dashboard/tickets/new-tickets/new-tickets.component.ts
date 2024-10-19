import {
  AfterViewInit,
  Component,
  ElementRef,
  OnChanges,
  SimpleChanges,
  viewChild,
  ViewChild,
  afterRender,
  afterNextRender,
} from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-new-tickets',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-tickets.component.html',
  styleUrl: './new-tickets.component.css',
})
export class NewTicketsComponent implements OnInit, AfterViewInit {
  // @ViewChild('form') form!: ElementRef<HTMLFormElement>;
  form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  titleText!: string;
  requestText!: string;

  constructor() {
    // renders when ever there is any change dedected in the application
    afterRender(() => {
      console.log('NewTicketsComponent -> afterRender');
    });

    // renders when ever there is any change dedected in the application, but only once
    afterNextRender(() => {
      console.log('NewTicketsComponent -> afterNextRender');
    });
  }

  ngOnInit(): void {
    // the execution of form variable will be undefied here as the viewchild is not yet found
    console.log('form-OnInIt', this.form().nativeElement);
  }

  // executes once the form -> viewchild has been found
  ngAfterViewInit(): void {
    console.log('form-ngAfterViewInit', this.form().nativeElement);
  }

  onSubmit(titleText: string, requestText: string) {
    this.titleText = titleText;
    this.requestText = requestText;
    this.form().nativeElement.reset();
  }
}
