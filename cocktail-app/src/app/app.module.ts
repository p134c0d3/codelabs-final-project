import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RandomCocktailComponent } from './random-cocktail/random-cocktail.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoritesComponent,
    SearchComponent,
    HomeComponent,
    NavComponent,
    RandomCocktailComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,

    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
