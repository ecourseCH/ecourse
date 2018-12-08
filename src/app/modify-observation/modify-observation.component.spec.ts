import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyObservationComponent } from './modify-observation.component';

describe('ModifyObservationComponent', () => {
  let component: ModifyObservationComponent;
  let fixture: ComponentFixture<ModifyObservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyObservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyObservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
