import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuListingComponent } from './stu-listing.component';

describe('StuListingComponent', () => {
  let component: StuListingComponent;
  let fixture: ComponentFixture<StuListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
