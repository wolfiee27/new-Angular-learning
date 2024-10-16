import { Component, inject, Input } from '@angular/core';
import {
  type CalculatedInvestmentData,
} from '../calculator.model';
import { InvestmentCalculatorService } from '../calculator.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  @Input({ required: true }) calculatedInvestment!: CalculatedInvestmentData[];


}
