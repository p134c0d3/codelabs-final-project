import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RandomCocktail } from './favorites/favorites.model';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  allCocktails: any;

  constructor(private http: HttpClient) {}

fetchCocktails(searchInput: string) {
  const formattedQuery = searchInput.split(' ').join('+').toLowerCase();
  this.http
    .get(`https://www.thecocktaildb.com/api/json/v1/1/random.php${formattedQuery}`)
    .subscribe((response) => {
      // console.log('response', response);
      this.saveCocktails(response);
    });
}

saveCocktails(cocktails: Object) {

}
}
