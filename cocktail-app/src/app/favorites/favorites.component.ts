import { Component, OnInit } from '@angular/core';
import { Favorites } from './favorites.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  favorites: Favorites[] = [
    new Favorites(
      'Cocktail Name',
      '1 splash Coca-Cola',
      'Highball glass',
      'https://pxhere.com/en/photo/1593200'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
