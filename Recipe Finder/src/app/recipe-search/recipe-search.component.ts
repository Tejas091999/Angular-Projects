import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.css']
})
export class RecipeSearchComponent {
  searchQuery:string="";
  @Output() search :EventEmitter<string> = new EventEmitter<string>()

  onSearch(){
    this.search.emit(this.searchQuery)
  }
}
