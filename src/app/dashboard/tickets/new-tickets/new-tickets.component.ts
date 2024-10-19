import {
  Component,
  ElementRef,
  OnChanges,
  SimpleChanges,
  viewChild,
  ViewChild,
} from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-tickets',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-tickets.component.html',
  styleUrl: './new-tickets.component.css',
})
export class NewTicketsComponent implements OnChanges {
  // @ViewChild('form') form!: ElementRef<HTMLFormElement>;
  form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  titleText!: string;
  requestText!: string;

  onSubmit(titleText: string, requestText: string) {
    this.titleText = titleText;
    this.requestText = requestText;
    this.form().nativeElement.reset();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
