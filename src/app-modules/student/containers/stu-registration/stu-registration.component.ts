import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'stu-registration',
  templateUrl: './stu-registration.component.html',
  styleUrls: ['./stu-registration.component.css']
})
export class StuRegistrationComponent implements OnInit {

  regForm: FormGroup;
  bloodGroupOpts = [{ label: 'O+', id: 1 }, { label: 'B+', id: 2 }, { label: 'AB', id: 3 }, { label: 'AB-', id: 4 }];

  constructor() { }

  ngOnInit() {
    this.prepareForm();
  }

  save() {
    console.log(this.regForm.value);
  }
  rawData() {
    console.log(this.regForm.getRawValue());
  }

  prepareForm() {
    this.regForm = new FormGroup({
      firstname: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      middlename: new FormControl(),
      lastname: new FormControl(),
      gender: new FormControl('Boy', [Validators.required])
    });
  }


  fillTheForm() {
    //always take value for each control
    this.regForm.setValue({
      firstname: 'indresh',
      middlename: 'pratap',
      lastname: 'singh',
      gender: 'Boy'
    });
  }

  patchTheForm() {
    //always take value for each control
    this.regForm.patchValue({
      firstname: 'indresh',
      middlename: 'pratap',
      lastname: 'singh'
     
    });
  }

  addBloodGroupCtrl() {
    //dynamic add new controls to existing form
    // here null is default value
    this.regForm.addControl('bloodGroup', new FormControl(null));
  }

}
