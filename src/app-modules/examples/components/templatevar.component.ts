import { Component } from '@angular/core';

@Component({
    selector: 'app-template-var',
    templateUrl: './templatevar.component.html'
})
export class TemplateVarComponent  {
    title="This is title";
    max = 20;
    highlightColor="cyan";

    explore(element) {
        console.log(element.value);
    }
    exploreDiv(element) {
        console.log("html",element.innerHTML);
        element.style.color='red';
    }

    exploreComp(element) {
        console.log(element);
        
    }
}
