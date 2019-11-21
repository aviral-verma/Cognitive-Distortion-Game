import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeadingComponent } from './heading/heading.component';
import { SituationComponent } from './situation/situation.component';
import { NatComponent } from './nat/nat.component';
import { OptionsComponent } from './options/options.component';
import { OptionSolutionComponent } from './option-solution/option-solution.component';
import { SelectedOptionComponent } from './selected-option/selected-option.component';
import { SelectedOptionContentComponent } from './selected-option-content/selected-option-content.component';
import { OptionsPopupProceedComponent } from './options-popup-proceed/options-popup-proceed.component';
import { AllSituationsComponent } from './all-situations/all-situations.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomOverlayDirective } from './shared/custom-dialog/custom-overlay.directive';
import { DialogContainerComponent } from './shared/custom-dialog/dialog-container/dialog-container.component';
import { DialogBoxService } from './shared/custom-dialog/dialog-box.service';
import { DialogBoxChildDirective } from './shared/custom-dialog/dialog-container/dialog-box-child.directive';
import { ScoreComponent } from './score/score.component';
import { PopupComponent } from './popup/popup.component';

const appRoutes: Routes = [
  { path: 'main', component: MainComponent },
  

  { path: '',
    component: HomeComponent
  },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeadingComponent,
    SituationComponent,
    NatComponent,
    OptionsComponent,
    OptionSolutionComponent,
    SelectedOptionComponent,
    SelectedOptionContentComponent,
    OptionsPopupProceedComponent,
    AllSituationsComponent,
    HomeComponent,
    DialogContainerComponent,
    CustomOverlayDirective,
    DialogBoxChildDirective,
    ScoreComponent,
    PopupComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } 
    ),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [DialogBoxService, OptionsComponent, HeadingComponent],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogContainerComponent,
    PopupComponent
  ]
})
export class AppModule { }
