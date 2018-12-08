import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyActivityComponent } from './modify-activity.component';

describe('ModifyActivityComponent', () => {
  let component: ModifyActivityComponent;
  let fixture: ComponentFixture<ModifyActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
