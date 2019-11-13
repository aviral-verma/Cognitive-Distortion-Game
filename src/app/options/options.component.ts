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
  correctOptionsLength;
  selectedCorrectOptionsLength = 0;
  correctOptionFound=-1;
  optionOne;
  optionOneDistortion;
  optionTwo;
  optionTwoDistortion;
  optionThree;
  optionThreeDistortion;
  optionFour;
  optionFourDistortion;
  optionFive;
  optionFiveDistortion;
  optionSix;
  optionSixDistortion;
  constructor(private gameService: GameService, public dialog: MatDialog) {
    // console.log("constructor called");
    // this.optionOne = this.gameService.optionOne;
    // this.optionOneDistortion = this.gameService.optionOneDistortion;
    // this.optionTwo = this.gameService.optionTwo;
    // this.optionTwoDistortion = this.gameService.optionTwoDistortion;
    // this.optionThree = this.gameService.optionThree;
    // this.optionThreeDistortion = this.gameService.optionThreeDistortion;
    // this.optionFour = this.gameService.optionFour;
    // this.optionFourDistortion = this.gameService.optionFourDistortion;
    // this.optionFive = this.gameService.optionFive;
    // this.optionFiveDistortion = this.gameService.optionFiveDistortion;
    // this.optionSix = this.gameService.optionSix;
    // this.optionSixDistortion = this.gameService.optionSixDistortion;
  }

    openDialog() {
    const dialogRef = this.dialog.open(OptionPopupComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '62vh',
      width: '90vw',
});
  }

   onOptionClick(item) {
     this.gameService.optionSelected = item.distortion;
     this.gameService.optionMessage = item.message;
     this.gameService.correct.forEach(correctItem => {
      if(correctItem.id === item.id)
      {
        this.gameService.selectedCorrectOptionsSet.add(item.id);
        this.gameService.selectedCorrectOptionsLength++;
        this.gameService.optionStatus = "correct";
        this.correctOptionFound=1;
        this.gameService.score+=10;
      }
    });
    if(this.correctOptionFound!=1)
    {
      this.gameService.optionStatus = "incorrect";
    }
      
    if(this.gameService.selectedCorrectOptionsLength === this.gameService.correct.length)
    {
      this.gameService.selectedCorrectOptionsSet.clear();
      this.gameService.selectedCorrectOptionsLength = 0;
      this.gameService.optionStatus = "allcorrect";
    }
      this.openDialog();
      this.correctOptionFound = -1;
    }
   
  optionsCall() {
    this.gameService.getGameData()
    .subscribe((data) => 
    {
      this.game = data;
      this.gameService.optionOne = this.game.results[this.gameService.questionId-1].options[0];
      this.gameService.optionTwo = this.game.results[this.gameService.questionId-1].options[1];
      this.gameService.optionThree = this.game.results[this.gameService.questionId-1].options[2];
      this.gameService.optionFour = this.game.results[this.gameService.questionId-1].options[3];
      this.gameService.optionFive = this.game.results[this.gameService.questionId-1].options[4];
      this.gameService.optionSix = this.game.results[this.gameService.questionId-1].options[5];
      this.gameService.optionOneDistortion = this.gameService.optionOne.distortion;
      this.gameService.optionTwoDistortion = this.gameService.optionTwo.distortion;
      this.gameService.optionThreeDistortion = this.gameService.optionThree.distortion;
      this.gameService.optionFourDistortion = this.gameService.optionFour.distortion;
      this.gameService.optionFiveDistortion = this.gameService.optionFive.distortion;
      this.gameService.optionSixDistortion = this.gameService.optionSix.distortion;
      this.gameService.correct = this.game.results[this.gameService.questionId-1].correct;
    }  
  );  
  }

  ngOnInit() {
    this.optionsCall();
    console.log("ngoninit called");

  }

}

@Component({
  selector: 'app-option-popup',
  templateUrl: './option-popup.component.html',
  styleUrls: ['./option-popup.component.css']
})
export class OptionPopupComponent{}
