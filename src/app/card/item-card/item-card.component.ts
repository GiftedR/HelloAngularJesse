import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent {
  @Input() data: any = {
    gameId: "",
    title: "Placeholder Title",
    shortDescription: "Some quick Example about how the only one who can give Lord Helmet the Rasberry is LoneStar",
    image: 'https://resources.gdevelop-app.com/private-assets/Placeholder%20Top%20View/thumbnail.png?h=720&w=1280',
    link: "item"
  };
}
