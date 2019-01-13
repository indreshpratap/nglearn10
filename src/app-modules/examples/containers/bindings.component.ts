import { Component, ViewChild, OnInit, AfterViewInit, ElementRef, ViewChildren, QueryList } from "@angular/core";
import { PageComponent } from "src/app-modules/ui-kit/components/page/page.component";
import { HighlightDirective } from "src/app-modules/ui-kit/directives/highlight.directive";

@Component({
    selector: "app-bindings",
    templateUrl: "./bindings.component.html"
})
export class BindingsComponent implements OnInit,AfterViewInit {
   

    bucketId = "bucket001";
    googleLink = "http://google.com";
    image = "https://via.placeholder.com/350x150";
    linkDesc = "Google";

    @ViewChild("mycontent") mcontent:ElementRef;

    @ViewChild(PageComponent) page:PageComponent;

    @ViewChildren(PageComponent) pages:QueryList<PageComponent>;
    @ViewChildren(HighlightDirective) highligts:QueryList<HighlightDirective>;

    constructor() {
        setTimeout(() => {
            this.googleLink = "http://yahoo.com";
            this.linkDesc = "Yahoo";
            // this.bucketId="bucket110";
        }, 4000);
        console.log("mycontent constructor", this.mcontent);
        console.log("pagecomponent constructor", this.page);
    }

    ngOnInit(): void {
        console.log("mycontent ngonInit", this.mcontent);
        console.log("pagecomponent ngoninit", this.page.title);
    }
    ngAfterViewInit(): void {
        console.log("mycontent ngAfterViewInit", this.mcontent);
        this.mcontent.nativeElement.innerHTML = 'this is content';
        console.log("pagecomponent ngafterviewinit", this.page.title);
        console.log("highlights ngafterviewinit", this.highligts);
        console.log(this.highligts.first.element.nativeElement.innerHTML);
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