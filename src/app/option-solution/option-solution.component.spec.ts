import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionSolutionComponent } from './option-solution.component';

describe('OptionSolutionComponent', () => {
  let component: OptionSolutionComponent;
  let fixture: ComponentFixture<OptionSolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionSolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
