import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

  id = "";
  game:any = {};

  constructor(private route:ActivatedRoute, private data: DataService, private router:Router){

  }
  ngOnInit(): void {
    console.log("View is Ready");

    this.route.paramMap.pipe(
      switchMap(params => {
        this.id = params.get('id')!;
        return this.data.getOneGameByID(this.id);
      })
    ).subscribe(ourGame => {
      this.game = ourGame;
    })

    // this.route.paramMap.subscribe(params => {
    //   //console.log(params);
    //   this.id = params.get('id')!;
    // });

    // this.data.getOneGameByID(this.id).subscribe(result => {
    //   console.log(result);
    // });
  }

  editGame(): void {

  }

  deleteGame(): void{
    this.data.deleteGame(this.id).subscribe(result => {
      this.router.navigate(['']);
    })

  }
}
