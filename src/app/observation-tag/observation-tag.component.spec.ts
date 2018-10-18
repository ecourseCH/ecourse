import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservationTagComponent } from './observation-tag.component';

describe('ObservationTagComponent', () => {
  let component: ObservationTagComponent;
  let fixture: ComponentFixture<ObservationTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservationTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservationTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
