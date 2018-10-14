import { Component, OnInit } from '@angular/core';
import { FlightService } from '../../services/flight.service';

@Component({
    selector: 'app-special-offer-listing',
    templateUrl: './special-offer-listing.component.html',
    // styleUrls: ['./flight-listing.component.scss']
})
export class SpecialOfferListingComponent {
    flights;
    favFlights = [];

    constructor(flightService:FlightService ) {
        this.flights = flightService.getFlightList();
    }

    addToFav(data) {
        console.log("Added to fav called", data);
        let indx = this.getFavFlightIndex(data);
        console.log(indx);
        
        if (indx === -1) {
            this.favFlights.push(data);
        } else {
            alert('Already in your fav list');
        }
    }


    getFavFlightIndex(flight) {
        let indx = this.favFlights.indexOf(flight);
        return indx;
    }



    removeFromFav(data) {
        if (confirm("Are you sure want to remove from fav?")) {
            let indx = this.getFavFlightIndex(data);
            this.favFlights.splice(indx, 1);
        }
    }


}
