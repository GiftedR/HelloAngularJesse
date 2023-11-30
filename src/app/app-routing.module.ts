import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { GameEditComponent } from './game-edit/game-edit.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', component: HomeComponent},
  { path: "games/create", component: GameEditComponent },
  { path: "games/:id", component: GameDetailComponent },
  { path: "games/:id/edit", component: GameEditComponent },
  { path: "item", component: ItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
