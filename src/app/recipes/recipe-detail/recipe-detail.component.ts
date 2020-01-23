import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeServices: RecipeService) { }

  ngOnInit() {
  }

  onAddToShoppingList() {
    this.recipeServices.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
