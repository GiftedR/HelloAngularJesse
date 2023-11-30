import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-game-edit',
  templateUrl: './game-edit.component.html',
  styleUrls: ['./game-edit.component.css']
})
export class GameEditComponent implements OnInit {

  id: string = "";

  gameForm: FormGroup = this.fb.group({
    gameId: ['', Validators.required],
    title: ['', Validators.required],
    shortDescription: ['', Validators.required],
    description: ['', Validators.required],
    image: ['/assets/images/placeholder.png', Validators.required],
    features: this.fb.array([])
  });

  constructor(
    private data:DataService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ){
    this.route.paramMap.pipe(
      switchMap(params => {
        this.id = params.get('id') || "";
        return this.data.getOneGameByID(this.id);
      })
    ).subscribe(gameReturn => {
      this.initForm(gameReturn);
    })
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  initForm(Gamedata: any): void {
    console.log(Gamedata)
    this.gameForm.patchValue({
      gameId: Gamedata.gameId,
      title: Gamedata.title,
      shortDescription: Gamedata.shortDescription,
      description: Gamedata.description,
      image: Gamedata.image
    })

    // TODO: add the features into the feature array

    Gamedata.features.forEach((gameFeature:any) => {
      this.features.push(this.makeFeatureGroup(gameFeature));
    });
  }

  get features(){
    return this.gameForm.get('features') as FormArray;
  }

  makeFeatureGroup(gameFeature: any): FormGroup {
    return this.fb.group({
      gameFeatureId: [gameFeature.gameFeatureId, Validators.required],
      gameId: [gameFeature.gameId, Validators.required],
      name: [gameFeature.name, Validators.required],
      description: [gameFeature.description, Validators.required],
      image: [gameFeature.image, Validators.required]
    });
  }

  removeFeature(index:number): void {
    this.features.removeAt(index);
  }

  addNewFeature():void {
    this.features.push(this.fb.group({
      gameFeatureId: ['', Validators.required],
      gameId: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required]
    }));
  }

  SubmitForm(): void {
    console.log(this.gameForm.value);
    
    let game = {
      gameId: this.gameForm.value.gameId,
      title: this.gameForm.value.title,
      shortDescription: this.gameForm.value.shortDescription,
      description: this.gameForm.value.description,
      image: this.gameForm.value.image,
      features: this.gameForm.value.features
    }

    //if not editing
    if (this.id == ""){
      this.data.createGame(game);
      this.router.navigate(['']);
    }
    else{
      //if editing
      this.data.updateGame(game);
      this.router.navigate(['games', this.id]);
    }


  }
}
