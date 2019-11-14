import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-nat',
  templateUrl: './nat.component.html',
  styleUrls: ['./nat.component.css']
})
export class NatComponent implements OnInit {

  game;
  nat;
  constructor(private gameService: GameService) {
  }

  ngOnInit() {
    this.gameService.nat.subscribe((data) => {
      this.nat = data;
    });
  }
}
