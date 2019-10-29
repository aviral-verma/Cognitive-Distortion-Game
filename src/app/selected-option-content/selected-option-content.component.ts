import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-selected-option-content',
  templateUrl: './selected-option-content.component.html',
  styleUrls: ['./selected-option-content.component.css']
})
export class SelectedOptionContentComponent implements OnInit {

  message="";

  constructor(private gameService: GameService) { 
    this.message=this.gameService.optionMessage;
  }

  ngOnInit() {
  }

}
