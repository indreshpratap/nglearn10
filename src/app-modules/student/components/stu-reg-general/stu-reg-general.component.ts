import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'stu-reg-general',
  templateUrl: './stu-reg-general.component.html',
  styleUrls: ['./stu-reg-general.component.css']
})
export class StuRegGeneralComponent implements OnInit {

  @Input() regForm:FormGroup;

  bloodGroupOpts = [{ label: 'O+', id: 1 }, { label: 'B+', id: 2 }, { label: 'AB', id: 3 }, { label: 'AB-', id: 4 }];
  constructor() { }

  ngOnInit() {
  }

}
