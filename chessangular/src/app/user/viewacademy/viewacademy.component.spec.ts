import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewacademyUserComponent } from './viewacademy.component';

describe('ViewacademyComponent', () => {
  let component: ViewacademyUserComponent;
  let fixture: ComponentFixture<ViewacademyUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewacademyUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewacademyUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
