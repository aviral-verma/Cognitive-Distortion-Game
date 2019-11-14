import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
  index!: any;
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
  constructor(private gameService: GameService, public dialog: MatDialog) {}

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
     this.correct.forEach(correctItem => {
      if(correctItem.id === item.id)
      {
        this.gameService.selectedCorrectOptionsSet.add(item.id);
        this.gameService.optionStatus = "correct";
        this.correctOptionFound=1;
        this.gameService.score+=10;
      }
    });
    if(this.correctOptionFound!=1)
    {
      this.gameService.optionStatus = "incorrect";
    }

    if(this.gameService.selectedCorrectOptionsSet.size === this.correct.length)
    {
      this.gameService.selectedCorrectOptionsSet.clear();
      this.gameService.optionStatus = "allcorrect";
    }
      this.openDialog();
      this.correctOptionFound = -1;
    }
   
  optionsCall() {
    this.gameService.optionOne.subscribe((data) => {
      this.optionOne = data;
      this.optionOneDistortion = data.distortion;
    });
    this.gameService.optionTwo.subscribe((data) => {
      this.optionTwo= data;
      this.optionTwoDistortion = data.distortion;
    });
    this.gameService.optionThree.subscribe((data) => {
      this.optionThree = data;
      this.optionThreeDistortion = data.distortion;
    });
    this.gameService.optionFour.subscribe((data) => {
      this.optionFour = data;
      this.optionFourDistortion = data.distortion;
    });
    this.gameService.optionFive.subscribe((data) => {
      this.optionFive = data;
      this.optionFiveDistortion = data.distortion;
    });
    this.gameService.optionSix.subscribe((data) => {
      this.optionSix = data;
      this.optionSixDistortion = data.distortion;
    });
    this.gameService.correct.subscribe((data) => {
      this.correct = data;
    });
  }
  ngOnInit() {
    this.optionsCall();
}
}

@Component({
  selector: 'app-option-popup',
  templateUrl: './option-popup.component.html',
  styleUrls: ['./option-popup.component.css']
})
export class OptionPopupComponent{}
