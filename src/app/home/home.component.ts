import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  cardList: any[] = [
    {
      title: "Card1",
      text: "This is the first card and you shouldnt be seeing this.",
      imgSRC: 'https://resources.gdevelop-app.com/private-assets/Placeholder%20Top%20View/thumbnail.png?h=720&w=1280',
      link: "games/Game1"
    },
    {
      title: "Card2",
      text: "This is the first card and you shouldnt be seeing this.",
      imgSRC: 'https://resources.gdevelop-app.com/private-assets/Placeholder%20Top%20View/thumbnail.png?h=720&w=1280',
      link: "games/Game2"
    },
    {
      title: "Card3",
      text: "This is the first card and you shouldnt be seeing this.",
      imgSRC: 'https://resources.gdevelop-app.com/private-assets/Placeholder%20Top%20View/thumbnail.png?h=720&w=1280',
      link: "games/Game3"
    }
  ];

  games = this.data.games$;

  constructor(private data: DataService) {
    this.data.getAllGames();
  }
}
