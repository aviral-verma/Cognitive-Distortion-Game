import { Component, OnInit, NgZone } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../models/game';

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

  titleCall(){
    this.gameService.getGameData()
    .subscribe((data) => 
    {
      this.game = data;
      this.ngZone.run( () => {
        this.title = this.game.results[this.gameService.questionId-1].title;
        this.gameService.title = this.title;
      });
      console.log(this.title);
    } 
  );
  }
  ngOnInit() {
    this.titleCall();
  }

}
