import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  expression: string = '';
  result: string = '';

  appendToExpression(value: string) {
    this.expression += value;
    this.result = this.expression;
  }

  calculateResult() {
    try {
      this.result = eval(this.expression);
    } catch (error) {
      this.result = 'Error';
    }
  }

  clearExpression() {
    this.expression = '';
    this.result = '';
  }
}
