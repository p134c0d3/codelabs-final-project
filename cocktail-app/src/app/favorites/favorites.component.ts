import { Component, OnInit } from '@angular/core';
import { RandomCocktail } from './favorites.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  randCocktails: RandomCocktail[] = [
    new RandomCocktail(
      'Margarita',
      'Tequila, lime juice, ice cubes',
      'Double-bowl'
    ),
    new RandomCocktail('Screwdriver', 'Orange Juice, Vodka', 'Highball Glass'),
  ];

  constructor() {}

  ngOnInit(): void {}
}
