import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-selected-option',
  templateUrl: './selected-option.component.html',
  styleUrls: ['./selected-option.component.css']
})
export class SelectedOptionComponent implements OnInit {

  optionSelected="";
  constructor(private gameService: GameService) {
    this.optionSelected = this.gameService.optionSelected;
   }

  ngOnInit() {
  }

}
