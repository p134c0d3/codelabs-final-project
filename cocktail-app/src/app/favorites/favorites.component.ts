import { Component, OnInit } from '@angular/core';
import { Cocktail } from './cocktail.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  randCocktails: Cocktail[] = [];

  constructor() {}

  ngOnInit(): void {}
}
