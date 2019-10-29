import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from './models/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  selectedCorrectOptionsSet = new Set();

  gameUrl = 'http://localhost:3000';

  questionId = 1;

  getGameData() {
    return this.http.get(this.gameUrl  + '/gameData');
  }
}
