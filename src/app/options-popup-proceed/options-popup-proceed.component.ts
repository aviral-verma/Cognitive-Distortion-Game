import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { MatDialog } from '@angular/material/dialog';
import { OptionsComponent } from '../options/options.component';
import { HeadingComponent } from '../heading/heading.component';



@Component({
  selector: 'app-options-popup-proceed',
  templateUrl: './options-popup-proceed.component.html',
  styleUrls: ['./options-popup-proceed.component.css']
})
export class OptionsPopupProceedComponent implements OnInit {
  displayButton="Default Option";

  constructor(private gameService: GameService, public dialog: MatDialog, private optionsComponent: OptionsComponent, private headingComponent: HeadingComponent) {
        if(this.gameService.optionStatus=="correct")
        {
           this.displayButton = "Find Remaining Error";

        }
        else if(this.gameService.optionStatus=="incorrect")
        {
           this.displayButton = "Try again";

        }
        else if(this.gameService.optionStatus=="allcorrect")
        {
           this.displayButton = "Next Question";
        }
   }

  ngOnInit() {
  }
  closePopup()
  {
    if(this.gameService.optionStatus=="allcorrect")
    {
      this.gameService.questionId++;
      this.optionsComponent.optionsCall();
      this.headingComponent.titleCall();
      console.log("call");
    }
  }

}
