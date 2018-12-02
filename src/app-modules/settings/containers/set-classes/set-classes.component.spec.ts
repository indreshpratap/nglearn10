import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetClassesComponent } from './set-classes.component';

describe('SetClassesComponent', () => {
  let component: SetClassesComponent;
  let fixture: ComponentFixture<SetClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetClassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
