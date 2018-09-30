import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-flight-logo',
    templateUrl: './flight-logo.component.html'
})
export class FlightLogoComponent {
    @Input() logo: string;
    @Input() name: string;
    @Input() flightNumber: string;
}
