import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-flight-info',
    templateUrl: './flight-info.component.html',
    // styleUrls: ['./flight-listing.component.scss']
})
export class FlightInfoComponent {

    @Input() flight;
    @Input() msg:string;
    @Input("offer") isOffer; // we created a alias
    @Input() actionLabel;
    @Input() actionClass;

    @Output() action = new EventEmitter<any>();

    doAction() {
        console.log("You clicked on action btn", this.flight.id);
        this.action.emit(this.flight);
        
    }
    

}
