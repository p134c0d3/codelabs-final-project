import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RandomCocktail } from './favorites/cocktail.model';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  allCocktails: any;

  constructor(private http: HttpClient) {}

  onFetchCocktails() {
    // const formattedQuery = searchInput.split(' ').join('+').toLowerCase();
    // console.log(formattedQuery);
    this.http
      .get('http://www.thecocktaildb.com/api/json/v1/1/random.php')
      .subscribe((searchResults) => {
        console.log(searchResults);
      });
  }

  saveCocktails(cocktails: Object) {}
}
