import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../models/game';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {

  game;

  constructor(private gameService: GameService) {
    this.gameService.getGameData()
    .subscribe((data) => 
    this.game = data
  );
    
   }

   onNextClick(){
     this.gameService.questionId++;
   }

  ngOnInit() {
  }

}
