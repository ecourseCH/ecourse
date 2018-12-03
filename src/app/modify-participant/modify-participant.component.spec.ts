import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyParticipantComponent } from './modify-participant.component';

describe('ModifyParticipantComponent', () => {
  let component: ModifyParticipantComponent;
  let fixture: ComponentFixture<ModifyParticipantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyParticipantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
