import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeListComponent } from './trainee-list.component';

describe('TraineeListComponent', () => {
  let component: TraineeListComponent;
  let fixture: ComponentFixture<TraineeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraineeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
