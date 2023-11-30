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

  getOneGameByID(id: string): Observable<any> {
    return this.http.get<any[]>(`${this.baseURL}/games/${id}`);
  }
  //Get one by ID
  //Create New
  createGame(game: any): void{
    this.http.post<any>(`${this.baseURL}/games`, game).subscribe(result => {
      this.getAllGames();
    });
  }

  //Update Existing
  updateGame(game: any): void{
    this.http.put<any>(`${this.baseURL}/games/${game.gameId}`, game).subscribe(result => {
      this.getAllGames();
    })
  }
  //Delete by ID
  deleteGame(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseURL}/games/${id}`);
  }
}
