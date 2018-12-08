import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddObservationComponent } from './add-observation.component';

describe('AddObservationComponent', () => {
  let component: AddObservationComponent;
  let fixture: ComponentFixture<AddObservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddObservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddObservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
