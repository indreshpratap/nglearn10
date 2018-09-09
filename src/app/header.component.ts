import {Component} from '@angular/core';

@Component({
    selector:"app-header",
    template:`
    <header>
        <h1>{{ title }}</h1>

        <div> {{ description }}</div>
    </header>
    `
})
export class  HeaderComponent {
 title = "Angular Application";
 description = "This is description";
 constructor(){
    //  setTimeout(() => {
    //         this.title = "Changed the title";
    //  }, 5000);
 }
}
