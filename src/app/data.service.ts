import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseURL: String = "http://localhost:3000/api";

  games$: BehaviorSubject<any[]> = new BehaviorSubject<any>([])

  constructor(private http: HttpClient) { }

  //Get All
  getAllGames(): void{
    this.http.get<any[]>(`${this.baseURL}/games`).subscribe(result => {
      console.log("get all games at service", result);
      this.games$.next(result);
    });
  }

  getOneGameByID(id: string): void {
    this.http.get<any[]>(`${this.baseURL}/games/${id}`).subscribe(result => {
      console.log("get all games at service", result);
      this.games$.next(result);
    });
  }
  //Get one by ID
  //Create New
  //Update Existing
  //Delete by ID
}
