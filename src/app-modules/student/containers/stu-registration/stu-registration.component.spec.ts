import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuRegistrationComponent } from './stu-registration.component';

describe('StuRegistrationComponent', () => {
  let component: StuRegistrationComponent;
  let fixture: ComponentFixture<StuRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
