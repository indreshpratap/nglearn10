import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-classstyle',
    templateUrl: './classstyle.component.html'

})
export class ClassStyleComponent {

    state = "alert-info";

    settingsClasses = [];
    conditionClasses = { red: false, 'bold': false, 'big': true };
    
    styles = {};
    styleProperty;
    styleValue;

    addsettingclass(cls) {
        this.settingsClasses.push(cls);
    }

    addStyle() {
        // checking if both has some value
        if (this.styleProperty && this.styleValue) {
            //adding new item using styleproperty as key and stylevalue as value
            this.styles[this.styleProperty] = this.styleValue;
            this.styleProperty = null;
            this.styleValue = null;
        }
    }
}
