import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListParticipantsComponent } from './list-participants.component';

describe('ListParticipantsComponent', () => {
  let component: ListParticipantsComponent;
  let fixture: ComponentFixture<ListParticipantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListParticipantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListParticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
