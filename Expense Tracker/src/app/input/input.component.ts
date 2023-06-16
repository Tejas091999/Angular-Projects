import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  name!: string;
  category!: string;
  amount!: number;
  date!: Date;
  @Output() expenseAdded = new EventEmitter<any>()

  submitExpense(){
    const expense = {
      name:this.name,
      category: this.category,
      amount: this.amount,
      date: this.date
    };
    this.expenseAdded.emit(expense);
    this.name="";
    this.category="";
    this.amount=null;
    this.date="";
  }
}
