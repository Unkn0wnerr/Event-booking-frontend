import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OngoingMatchesComponent } from './ongoing-matches.component';

describe('OngoingMatchesComponent', () => {
  let component: OngoingMatchesComponent;
  let fixture: ComponentFixture<OngoingMatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OngoingMatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OngoingMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
