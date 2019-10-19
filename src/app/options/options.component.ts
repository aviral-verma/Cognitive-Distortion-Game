import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../models/game';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  game;

  constructor(private gameService: GameService) {
    this.gameService.getGameData()
    .subscribe((data) => 
    this.game = data
  );
    
   }

   onOptionClick() {
     console.log('yo')
   }

  ngOnInit() {
  }

}
