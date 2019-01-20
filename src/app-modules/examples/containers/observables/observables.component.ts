import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map, retry } from 'rxjs/operators';
@Component({
  selector: 'observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  data = [];
  constructor() { }

  ngOnInit() {
    let ob1 = Observable.create((observer) => {
      console.log("Created");
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.next(4);

      
      setTimeout(() => {
        observer.next(5);
      //  observer.error(new Error('Failed'));
      }, 2000);
      setTimeout(() => {
        observer.next(6);
        observer.complete();
      }, 4000);
    });

  let sub1=  ob1.subscribe(
      (res) => {
        this.data.push('First : ' + res);
      },
      (err) => {
        this.data.push('First Error', err);
      },
      () => {
        this.data.push('First complete');
      }
    );


    setTimeout(() => {
      sub1.unsubscribe();
    }, 1500);

    ob1.pipe(
      retry(2),
      map((i: number) => { return { name: 'User' + i, id: i }; }),
      filter((item: any) => item.id > 3),
    ).subscribe(res => this.data.push('Second : ' + JSON.stringify(res)),
      (err) => { console.warn("Second",err) });



  }

}
