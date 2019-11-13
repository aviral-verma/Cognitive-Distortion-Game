import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Game } from './models/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  selectedCorrectOptionsSet = new Set();

  // gameUrl = 'http://localhost:3000';
  gameUrl='http://172.26.90.50:8000';

  questionId = 1;
  optionStatus = "";
  optionSelected="";
  optionMessage="";
  score = 500;
  title;
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


// REMOVE THIS ONCE THE CODE IS MERGED

 headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzUxMiJ9.eyJ1c2VyX2lkIjo3LCJ1c2VybmFtZSI6ImFya2EiLCJleHAiOjE1NzA2MTgwOTIsImVtYWlsIjoiYXJrYWdob3NoMDI0QGdtYWlsLmNvbSIsIm9yaWdfaWF0IjoxNTY4MDI2MDkyfQ.gw1w1hT-FLv0rsxQQPEiPkYMSn4eVopdOZ6xeX1eQjmRSjiveHyIoWbzSjqXDUiv826UjYJUxLrakCOVN2Tx593IuAxJL-LszqwKfmvPUbxzUykv3giC3mal2aeTB73e8sVdN4DA34tlPGFJk8zINDnm1mekF7sibMKsSuG7oczRmITw82UoVnx_dRECcbb7HGFxSwT8vbqHc4uR-jzcFSoWK4r0V-d9XBls11IH11AGnew4z1OajRlMLUBlq-a0bgJjWQDG92wtmKhCBxvtm2lpGQN6xYimhkvU3ufrtUrz2t6qrF-nfiIBU7A759NUtVDfJKuCdvLUQYj9ZPYK2EyK-Nl2Rx8OIrrQFLH828_O-myWEvjg1wey8pKISGmAeZqDObDiM8zGju00_Opfcx5c1WCt-sI-uK60yaVjwgoaHG6jb43d5g2iMHg1l7RW0MZ2u9ngLrmQxHLmlithVtgHQjn1QAxfYpofAeQGl5HdVCWLwjg7fpLAIt1oDalVoWL15qkU534KTUqCEvGNQNTfbImiKDcz5P693Qj-iH722dHVpEs6Z_ax05s1PJdAH4uTh0I2tcrbIu0VyHQ630JY31d97Dn0f_5A4SM0g1g_kvoNaunQndM_ILNGaEiZrdiXvy6UC4TKDCiFVEPVK73uvu8u_AmrCWkz92IABbo'
 });
  options = {
    headers: this.headers
 }

//  this.http.post(URL, param, options)
//     .subscribe(data => {
//          console.log(data);
//  });
//REMOVE TILL HERE

  getGameData() {
    // return this.http.get(this.gameUrl  + '/gameData');
    return this.http.get(this.gameUrl  + '/api/v1/games/cognitive-distortion/icdgame-situation/', this.options);
  }
}
