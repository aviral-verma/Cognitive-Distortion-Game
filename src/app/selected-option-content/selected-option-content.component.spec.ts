import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedOptionContentComponent } from './selected-option-content.component';

describe('SelectedOptionContentComponent', () => {
  let component: SelectedOptionContentComponent;
  let fixture: ComponentFixture<SelectedOptionContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedOptionContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedOptionContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
