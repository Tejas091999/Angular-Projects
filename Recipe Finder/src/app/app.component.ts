import { Component } from '@angular/core';
import { RecipeServiceService } from './recipe-service.service';
import { Recipe } from './recipe';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  foundRecipes: Recipe[]=[];

  constructor(private recipeService : RecipeServiceService){}

  searchRecipes(query:string){
    this.foundRecipes = this.recipeService.searchRecipes(query);
  }
}
