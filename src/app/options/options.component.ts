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
  correct;
  selectedCorrectOptionsSet;
  correctOptionsLength;
  selectedCorrectOptionsLength = 0;
  correctOptionFound=-1;
  

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
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result`);
    // });
  }

   onOptionClick(item) {
     this.gameService.optionSelected = item.distortion;
     this.gameService.optionMessage=item.message;
     this.correct.forEach(correctItem => {
      if(correctItem.id === item.id)
      {
        this.selectedCorrectOptionsSet.add(item.id);
        this.selectedCorrectOptionsLength++;
        this.gameService.optionStatus = "correct";
        this.correctOptionFound=1;
        console.log(this.gameService.optionStatus);
      }
    });
    if(this.correctOptionFound!=1)
    {
      this.gameService.optionStatus = "incorrect";
        console.log(this.gameService.optionStatus);

    }
      
      if(this.selectedCorrectOptionsLength === this.correct.length)
      {
        this.selectedCorrectOptionsSet.clear();
        this.selectedCorrectOptionsLength = 0;
        this.gameService.optionStatus = "allcorrect";
        this.correctOptionFound=-1;
        console.log(this.gameService.optionStatus);

      }
      this.openDialog();
      this.correctOptionFound=-1;


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
