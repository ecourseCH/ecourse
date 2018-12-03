import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSetupComponent } from './course-setup.component';

describe('CourseSetupComponent', () => {
  let component: CourseSetupComponent;
  let fixture: ComponentFixture<CourseSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
