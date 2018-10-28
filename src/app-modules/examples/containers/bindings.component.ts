import { Component } from "@angular/core";

@Component({
    selector: "app-bindings",
    templateUrl: "./bindings.component.html"
})
export class BindingsComponent {

    bucketId = "bucket001";
    googleLink = "http://google.com";
    image = "https://via.placeholder.com/350x150";
    linkDesc = "Google";

    constructor() {
        setTimeout(() => {
            this.googleLink = "http://yahoo.com";
            this.linkDesc = "Yahoo";
            // this.bucketId="bucket110";
        }, 4000);
    }

    sayHi() {
        alert("Hi there");
    }

    changeId() {
        console.log("Mouse enter changing id");
        this.bucketId = "bucket200";
    }

    // Here ev  = $event passing from template
    sayHello(ev) {
        if (ev.shiftKey) {
            console.log('Hello there');
            console.log(ev);
        }

    }

    proccessKey(ev, abc) {
        console.log(abc);
        console.log(ev);
    }
}