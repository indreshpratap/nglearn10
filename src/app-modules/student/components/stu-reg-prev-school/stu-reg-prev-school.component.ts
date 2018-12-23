import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'stu-reg-prev-school',
  templateUrl: './stu-reg-prev-school.component.html',
  styleUrls: ['./stu-reg-prev-school.component.css']
})
export class StuRegPrevSchoolComponent implements OnInit {

  @Input() regForm:FormGroup;
  @Input() previousSchoolArray:FormArray;
  constructor() { }

  ngOnInit() {
    this.add();
  }

  add(){
    this.previousSchoolArray.push(this.newItem())
  }

  remove(index){
    this.previousSchoolArray.removeAt(index);
  }

  newItem(){
  return new FormGroup({
      schoolName:new FormControl(null,[Validators.required]),
      schoolSession:new FormControl(null,[Validators.required]),
      schoolClass:new FormControl(null,[Validators.required])
    });

  }

}
