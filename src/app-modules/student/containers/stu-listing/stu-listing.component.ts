import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiClient } from 'src/app/services/api-client.service';

@Component({
  selector: 'stu-listing',
  templateUrl: './stu-listing.component.html',
  styleUrls: ['./stu-listing.component.css']
})
export class StuListingComponent implements OnInit {

  list;
  constructor(private api: ApiClient) { }

  ngOnInit() {
    this.fetchStudents();
  }

  fetchStudents() {
    this.api.get('student/fetch').subscribe((res: any) => {
      this.list = res.data;
    });
  }

}
