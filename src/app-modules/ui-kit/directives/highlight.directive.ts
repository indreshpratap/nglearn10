import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[highlight]', // attribute selector
})
export class HighlightDirective {

    @Input("highlight") color:string;

    /**
     * ElementRef is a wrapper around the element on which this directive is applied.
     * Defining a parameter  in @Directive,@Component, and @Pipe's constructor is called Dependency Injection in angular 
     * @param element 
     */
    constructor(private element: ElementRef) {
        console.log("Highlight directive");
        // this.highlight();
    }

    private highlight(value) {
        this.element.nativeElement.style.backgroundColor = value;
    }

    // here it binds an event to the element on which this directive is applied.
    @HostListener('mouseenter')
    addHightlight() {
        this.highlight(this.color||'yellow');
    }

    @HostListener('mouseleave')
    removeHightlight() {
        this.highlight('white');
    }
}