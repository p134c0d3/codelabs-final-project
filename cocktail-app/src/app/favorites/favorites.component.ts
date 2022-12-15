import { Component, OnInit } from '@angular/core';
import { Cocktail } from './cocktail.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  randCocktails: Cocktail[] = [
    new Cocktail(
      'Margarita',
      'Tequila, lime juice, ice cubes',
      'Double-bowl',
      '#'
    ),
    new Cocktail('Screwdriver', 'Orange Juice, Vodka', 'Highball Glass', '#'),
  ];

  constructor() {}

  ngOnInit(): void {}
}
