import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetDashboardComponent } from './set-dashboard.component';

describe('SetDashboardComponent', () => {
  let component: SetDashboardComponent;
  let fixture: ComponentFixture<SetDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
