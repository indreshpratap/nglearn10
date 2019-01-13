import { Component, OnInit, Input, ContentChildren, QueryList, AfterContentInit, ContentChild, AfterViewInit } from '@angular/core';
import { HighlightDirective } from '../../directives/highlight.directive';
import { PageContentComponent } from '../page-content/page-content.component';

@Component({
  selector: 'page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit,AfterContentInit,AfterViewInit {
 

  @Input() title;

  @ContentChild(PageContentComponent) pageContent:PageContentComponent;
  @ContentChildren(HighlightDirective) highlights:QueryList<HighlightDirective>;
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
   console.log("aftercontentinit", this.highlights);
   console.log("aftercontentinit", this.pageContent);
  }

  ngAfterViewInit(): void {
    console.log("aftercontentviewinit", this.highlights);
    console.log("aftercontentviewinit", this.pageContent);
  }
 

}
