import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../models/game';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  game;
  correct:string[];
  selectedCorrectOptionsSet;
  correctOptionsLength;
  selectedCorrectOptionsLength = 0;
  

  constructor(private gameService: GameService, public dialog: MatDialog) {
    this.gameService.getGameData()
    .subscribe((data) => 
    {
      this.game = data;
      this.correct = this.game[this.gameService.questionId-1].correct;
    }
    
  );
  this.selectedCorrectOptionsSet = this.gameService.selectedCorrectOptionsSet;
   }

    openDialog() {
    const dialogRef = this.dialog.open(OptionPopupComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '62vh',
      width: '90vw',
});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


   onOptionClick(item) {
     this.openDialog();
    this.correct.forEach(correctItem => {
      if(correctItem === item)
      {
        this.selectedCorrectOptionsSet.add(item);
        this.selectedCorrectOptionsLength++;
      }
      if(this.selectedCorrectOptionsLength === this.correct.length)
      {
        this.selectedCorrectOptionsSet.clear();
        this.selectedCorrectOptionsLength = 0;
        this.gameService.questionId++;
      }
    })
   }

  ngOnInit() {
  }

}

@Component({
  selector: 'app-option-popup',
  templateUrl: './option-popup.component.html',
  styleUrls: ['./option-popup.component.css']
})
export class OptionPopupComponent{}
