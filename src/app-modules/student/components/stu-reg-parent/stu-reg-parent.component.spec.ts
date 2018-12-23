import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuRegParentComponent } from './stu-reg-parent.component';

describe('StuRegParentComponent', () => {
  let component: StuRegParentComponent;
  let fixture: ComponentFixture<StuRegParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuRegParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuRegParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
