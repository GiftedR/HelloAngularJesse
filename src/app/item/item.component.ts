import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
 @Input() cardList: any[] = [
  {
    gameId: "",
    title: "Placeholder Title 1",
    shortDescription: "Some quick Example about how the only one who can give Lord Helmet the Rasberry is LoneStar",
    image: 'https://resources.gdevelop-app.com/private-assets/Placeholder%20Top%20View/thumbnail.png?h=720&w=1280',
    link: "item"
  },
  {
    gameId: "",
    title: "Placeholder Title 2",
    shortDescription: "Some quick Example about how the only one who can give Lord Helmet the Rasberry is LoneStar",
    image: 'https://resources.gdevelop-app.com/private-assets/Placeholder%20Top%20View/thumbnail.png?h=720&w=1280',
    link: "item"
  },
  {
    gameId: "",
    title: "Placeholder Title 3",
    shortDescription: "Some quick Example about how the only one who can give Lord Helmet the Rasberry is LoneStar",
    image: 'https://resources.gdevelop-app.com/private-assets/Placeholder%20Top%20View/thumbnail.png?h=720&w=1280',
    link: "item"
  }
 ];

 games = this.data.games$;

 constructor(private data: DataService) {
   this.data.getAllGames();
 }
}
