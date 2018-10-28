import { Component } from '@angular/core';

// component decorator
@Component({
  selector: 'app-root', // tag or name
  templateUrl: './app.component.html',  // html template
  styleUrls: ['./app.component.css'] // own css optional
}) 
export class AppComponent {
  title = 'nglearn10';
}
