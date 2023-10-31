import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ItemCardComponent } from './card/item-card/item-card.component';
import { CardListComponent } from './card/card-list/card-list.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemComponent,
    NavbarComponent,
    ItemCardComponent,
    CardListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
