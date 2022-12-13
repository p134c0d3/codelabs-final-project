import { NgModule } from "@angular/core";
import { FavoritesComponent } from "./favorites/favorites.component";
import { HomeComponent } from "./home/home.component";
import { RouterModule, Routes } from "@angular/router";


const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "favorites", component: FavoritesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
