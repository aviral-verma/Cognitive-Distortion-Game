import { Injectable, Component } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogBoxService {

  childComponent!: any;

  constructor() { }

  setDialogChild(component: any) {
    this.childComponent = component;
    console.log('service called');
  }

  getDialogChild() {
    return this.childComponent;
  }
}
