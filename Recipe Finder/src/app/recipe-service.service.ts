import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {
  constructor() { }
  private recipes:Recipe[]=[
    {name:"Pasta" ,description:"Deleciois Pasta"},
    {name:"Pizza" ,description:"Deleciois Pizza"},
    {name:"Salad" ,description:"Deleciois Salad"}
  ]

  searchRecipes(query:string):Recipe[]{
    if(!query){
      return this.recipes
    }

    query = query.toLowerCase();
    return this.recipes.filter(
      (recipe)=>
      recipe.name.toLowerCase().includes(query) ||
      recipe.description.toLowerCase().includes(query)
    );
  }
}
