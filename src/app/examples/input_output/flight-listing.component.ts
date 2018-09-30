import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-flight-listing',
    templateUrl: './flight-listing.component.html',
    // styleUrls: ['./flight-listing.component.scss']
})
export class FlightListingComponent {
    flights;
    favFlights = [];

    constructor() {
        this.flights = [
            {
                id: 1,
                logo: "assets/flights/1.png",
                name: "Jet Airways",
                flight_no: "JET-333",
                from: 'New Delhi',
                to: 'Mumbai',
                from_date: '23rd April 2018 12:20',
                to_date: '23rd April 2018 13:20'
            },
            {
                id: 2,
                logo: "assets/flights/2.png",
                name: "Indigo",
                flight_no: "IND-532",
                from: 'New Delhi',
                to: 'Mumbai',
                from_date: '23rd April 2018 05:20',
                to_date: '23rd April 2018 07:20'
            },
        ]
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
