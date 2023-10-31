import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', component: HomeComponent},
  { path: "item", component: ItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
