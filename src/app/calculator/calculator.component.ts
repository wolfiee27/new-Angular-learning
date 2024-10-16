import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type investmentData, type CalculatedInvestmentData } from './calculator.model';
import { TableComponent } from "./table/table.component";
import { InvestmentCalculatorService } from './calculator.service';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule, TableComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  private investmentService = inject(InvestmentCalculatorService)
  public calculatedInvestment!: CalculatedInvestmentData[]
  public enteredInvestmentData!: investmentData
  public canShowTable: boolean = false


  public initialInvestment : number = 0
  public duration : number = 0
  public expectedReturn : number = 0
  public annualInvestment : number = 0



  onEnteredInvestmentData(){
    this.enteredInvestmentData = {
      annualInvestment: this.annualInvestment,
      duration: this.duration,
      expectedReturn: this.expectedReturn,
      initialInvestment: this.initialInvestment
    }

    this.calculatedInvestment =  this.investmentService.getCalculatedInvestment(this.enteredInvestmentData)
    this.canShowTable = true  
  }
}
