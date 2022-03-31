import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddacademyComponent } from './addacademy.component';

describe('AddacademyComponent', () => {
  let component: AddacademyComponent;
  let fixture: ComponentFixture<AddacademyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddacademyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddacademyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
