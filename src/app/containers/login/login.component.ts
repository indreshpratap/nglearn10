import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username;
  password;

  constructor(private http: HttpClient) { }

  doLogin(frm) {
    let value = frm.value;
    this.http.post('/api/dologin', {username:value.name,password:value.pwd}).subscribe(res => {
      console.log(res);
      

    })
  }
  
  fetch() {
    this.http.get('/api/student/fetch').subscribe(res=>console.log(res));

  }



}
