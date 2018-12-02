import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetSessionsComponent } from './set-sessions.component';

describe('SetSessionsComponent', () => {
  let component: SetSessionsComponent;
  let fixture: ComponentFixture<SetSessionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetSessionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
