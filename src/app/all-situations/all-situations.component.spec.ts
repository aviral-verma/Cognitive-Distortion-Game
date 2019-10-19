import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSituationsComponent } from './all-situations.component';

describe('AllSituationsComponent', () => {
  let component: AllSituationsComponent;
  let fixture: ComponentFixture<AllSituationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSituationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSituationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
