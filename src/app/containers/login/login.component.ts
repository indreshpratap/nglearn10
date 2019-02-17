import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiClient } from 'src/app/services/api-client.service';
import { AuthService } from 'src/app/services/auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username;
  password;

  constructor(private api: ApiClient, private router: Router, private authService: AuthService) { }

  doLogin(frm) {
    let value = frm.value;
    this.api.post('dologin', { username: value.name, password: value.pwd })
      .subscribe((res: any) => {
        // console.log(res);
        //   alert('Login successful');
        this.authService.setUser(res);
        this.router.navigate(['home']);
      }, (err) => {
        alert(err.error.msg);
      })
  }





}
