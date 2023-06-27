import { Component,Input } from '@angular/core';
import { Recipe } from '../recipe';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Input() recipes:Recipe[]=[]
}
