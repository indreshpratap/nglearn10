import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiClient } from 'src/app/services/api-client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username;
  password;

  constructor(private api: ApiClient, private router: Router) { }

  doLogin(frm) {
    let value = frm.value;
    this.api.post('dologin', { username: value.name, password: value.pwd })
      .subscribe(res => {
        console.log(res);
        alert('Login successful');
        this.router.navigate(['home']);
      }, (err) => {
        alert(err.error.msg);
      })
  }

  



}
