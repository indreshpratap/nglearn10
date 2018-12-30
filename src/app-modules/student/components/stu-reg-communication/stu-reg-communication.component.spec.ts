import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuRegCommunicationComponent } from './stu-reg-communication.component';

describe('StuRegCommunicationComponent', () => {
  let component: StuRegCommunicationComponent;
  let fixture: ComponentFixture<StuRegCommunicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuRegCommunicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuRegCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
