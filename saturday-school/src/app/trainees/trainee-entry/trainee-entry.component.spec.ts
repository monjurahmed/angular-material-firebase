import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeEntryComponent } from './trainee-entry.component';

describe('TraineeEntryComponent', () => {
  let component: TraineeEntryComponent;
  let fixture: ComponentFixture<TraineeEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraineeEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineeEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
