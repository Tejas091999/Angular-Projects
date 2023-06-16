import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() expenses:any[];
  removeExpense(index:number){
    this.expenses.splice(index,1)
  }
}
