import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyLeaderComponent } from './modify-leader.component';

describe('ModifyLeaderComponent', () => {
  let component: ModifyLeaderComponent;
  let fixture: ComponentFixture<ModifyLeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyLeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyLeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
