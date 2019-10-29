import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../models/game';

@Component({
  selector: 'app-situation',
  templateUrl: './situation.component.html',
  styleUrls: ['./situation.component.css']
})
export class SituationComponent implements OnInit {

  game;

  constructor(private gameService: GameService) {
    this.gameService.getGameData()
    .subscribe((data) => 
    this.game = data
  ); 
    
   }

  ngOnInit() {
  }

}
