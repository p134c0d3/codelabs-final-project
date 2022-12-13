import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  onFetchCocktails(searchInput: string) {
    const formattedQuery = searchInput.split(' ').join('+').toLowerCase();
    this.http
      .get(`hhttps://www.thecocktaildb.com/api/json/v1/1/random.php${formattedQuery}`)
      .subscribe((searchResults) => {
        console.log('searchResults', searchResults);
})
}
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
