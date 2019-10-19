import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NatComponent } from './nat.component';

describe('NatComponent', () => {
  let component: NatComponent;
  let fixture: ComponentFixture<NatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
