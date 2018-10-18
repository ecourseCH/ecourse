import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservationShowComponent } from './observation-show.component';

describe('ObservationShowComponent', () => {
  let component: ObservationShowComponent;
  let fixture: ComponentFixture<ObservationShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservationShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservationShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
