import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolledcourseComponent } from './enrolledcourse.component';

describe('EnrolledcourseComponent', () => {
  let component: EnrolledcourseComponent;
  let fixture: ComponentFixture<EnrolledcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrolledcourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrolledcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
