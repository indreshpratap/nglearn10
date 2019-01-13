import { Component, Input, OnInit, SimpleChanges, DoCheck, AfterContentChecked, AfterViewChecked } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { pincode } from '../../../ui-kit/validators/pin.validator';

@Component({
  selector: 'stu-reg-communication',
  templateUrl: './stu-reg-communication.component.html',
  styleUrls: ['./stu-reg-communication.component.css']
})
export class StuRegCommunicationComponent implements OnInit,DoCheck,AfterContentChecked,AfterViewChecked {
 
  

  @Input()
  regForm: FormGroup;

  communications:FormGroup;

  constructor(private fb: FormBuilder) {
    console.log('constructor',this.regForm);
   }

   ngOnChanges(changes: SimpleChanges): void {
    
     console.log("ngOnChanges",changes);
   }

  ngOnInit() {
    console.log('ngInInit',this.regForm);
    this.communications = this.prepareCommunicationForm();
    this.regForm.addControl('communications', this.communications);
  }
  ngOnDestroy(): void {
  console.log('ngOnDestroy','Bye bye');
}

ngDoCheck(): void {
  console.log('Do check running');
}

ngAfterContentChecked(): void {
  console.log('after content checked running');
}
ngAfterViewChecked(): void {
  console.log('after view checked running');
}
  togglePermanent() {
   

    if (this.communications.get('isSame').value === true) {
      //  communication.get('permanent').disable();
      this.communications.removeControl('permanent');
    } else {
      this.communications.addControl('permanent', this.getAddress());
      // communication.get('permanent').enable();

    }
  }

  prepareCommunicationForm() {
    return this.fb.group({
      isSame: [false],
      residential: this.getAddress(),
      permanent: this.getAddress()
    });

    // new FormGroup({
    //   addrline1: new FormControl(null, [Validators.required]),
    //   addrline2: new FormControl(null, [Validators.required])
    // })
  }

  getAddress() {
    return this.fb.group(
      {
        addrline1: ['Test', [Validators.required]],
        addrline2: [],
        city: [, [Validators.required]],
        pin: [, [Validators.required,pincode]]
      })
  }

}
