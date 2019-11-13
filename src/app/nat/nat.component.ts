import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../models/game';

@Component({
  selector: 'app-nat',
  templateUrl: './nat.component.html',
  styleUrls: ['./nat.component.css']
})
export class NatComponent implements OnInit {

  game;
  nat;
  constructor(private gameService: GameService) {
    this.gameService.getGameData()
    .subscribe((data) => 
    {
        this.game = data;
        this.nat = this.game.results[gameService.questionId-1].nat
    } 
  );
  }

  ngOnInit() {}

}
