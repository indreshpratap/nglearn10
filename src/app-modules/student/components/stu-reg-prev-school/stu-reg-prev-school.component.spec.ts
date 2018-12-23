import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuRegPrevSchoolComponent } from './stu-reg-prev-school.component';

describe('StuRegPrevSchoolComponent', () => {
  let component: StuRegPrevSchoolComponent;
  let fixture: ComponentFixture<StuRegPrevSchoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuRegPrevSchoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuRegPrevSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
