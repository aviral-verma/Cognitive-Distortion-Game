import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-situation',
  templateUrl: './situation.component.html',
  styleUrls: ['./situation.component.css']
})
export class SituationComponent implements OnInit {

  game;
  situation;

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.gameService.situation.subscribe((data) => {
      this.situation = data;
    });
  }
}
