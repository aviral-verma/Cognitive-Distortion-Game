import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsPopupProceedComponent } from './options-popup-proceed.component';

describe('OptionsPopupProceedComponent', () => {
  let component: OptionsPopupProceedComponent;
  let fixture: ComponentFixture<OptionsPopupProceedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionsPopupProceedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsPopupProceedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
