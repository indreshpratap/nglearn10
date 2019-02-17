import { Component, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service';

// component decorator
@Component({
  selector: 'app-root', // tag or name
  templateUrl: './app.component.html',  // html template
  styleUrls: ['./app.component.css'] // own css optional
}) 
export class AppComponent implements OnDestroy {
  title = 'nglearn10';
  loggedIn = false;
  subscriber$;
  constructor(private authService:AuthService){
   this.subscriber$ =  authService.afterLogin().subscribe(res=>{
      this.loggedIn = this.authService.isLoggedIn();
    })
  }

  logout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.subscriber$.unsubscribe();
  }
}
