import { Injectable } from '@angular/core';
import {
  type CalculatedInvestmentData,
  type investmentData,
} from './calculator.model';

@Injectable({providedIn: 'root'})
export class InvestmentCalculatorService {
  private annualData: CalculatedInvestmentData[] = [];

  public getCalculatedInvestment({
    initialInvestment,
    duration,
    expectedReturn,
    annualInvestment,
  }: investmentData): CalculatedInvestmentData[] {
    this.annualData = [];

    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      this.annualData.push({
        year: year,
        interest: +interestEarnedInYear.toPrecision(2),
        valueEndOfYear: +investmentValue.toPrecision(2),
        annualInvestment: +annualInvestment.toPrecision(2),
        totalInterest: +totalInterest.toPrecision(2),
        totalAmountInvested: +(initialInvestment + annualInvestment * year).toPrecision(2),
      });
    }

    return this.annualData;
  }


}
