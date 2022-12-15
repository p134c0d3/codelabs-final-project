import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cocktail } from '../favorites/cocktail.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
@Injectable()
export class SearchComponent implements OnInit {
  constructor(private http: HttpClient) {}
  randCocktails: Cocktail = {
    cocktail: '',
    ingredients: '',
    glass: '',
    imgPath: '',
  };
  generateRandCocktails() {
    return this.http
      .get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .subscribe((response: any) => {
        console.log(response);
        const drink = response.drinks[0];
        this.randCocktails = {
          cocktail: drink.strDrink,
          ingredients:
            drink.strIngredient1 +
            '  ' +
            drink.strIngredient2 +
            '  ' +
            drink.strIngredient3 +
            '  ' +
            drink.strIngredient4 +
            '  ' +
            drink.strIngredient5 +
            '  ' +
            drink.strIngredient6 +
            '  ' +
            drink.strIngredient7 +
            '  ' +
            drink.strIngredient8 +
            '  ' +
            drink.strIngredient9 +
            '  ' +
            drink.strIngredient10 +
            '  ' +
            drink.strIngredient11 +
            '  ' +
            drink.strIngredient12 +
            '  ' +
            drink.strIngredient13 +
            '  ' +
            drink.strIngredient14 +
            '  ' +
            drink.strIngredient15,
          glass: drink.strGlass,
          imgPath: drink.strDrinkThumb,
        };
        console.log(this.randCocktails.imgPath);
      });
  }

  ngOnInit(): void {}
}
