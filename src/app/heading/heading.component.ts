import { Component, OnInit, NgZone } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {

  game;
  title;
  constructor(private gameService: GameService, private ngZone: NgZone) {
  }
  titleCall() {
this.gameService.title.subscribe((data) => {
    this.title = data;
  });
}
  ngOnInit() {
    this.gameService.getGameData();
    this.titleCall();
  }
}
