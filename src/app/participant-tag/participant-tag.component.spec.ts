import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantTagComponent } from './participant-tag.component';

describe('ParticipantTagComponent', () => {
  let component: ParticipantTagComponent;
  let fixture: ComponentFixture<ParticipantTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipantTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
