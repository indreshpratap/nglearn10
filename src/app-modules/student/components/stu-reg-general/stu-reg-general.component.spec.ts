import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuRegGeneralComponent } from './stu-reg-general.component';

describe('StuRegGeneralComponent', () => {
  let component: StuRegGeneralComponent;
  let fixture: ComponentFixture<StuRegGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuRegGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuRegGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
