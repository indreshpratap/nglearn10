import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { FlightService } from 'src/app/services/flight.service';

@Component({
    selector: 'app-flight-listing',
    templateUrl: './flight-listing.component.html',
    // styleUrls: ['./flight-listing.component.scss']
})
export class FlightListingComponent {
    flights;
    favFlights = [];

    /**
     * Dependency Injection, here FlightService object will be provided by angular
     */
    constructor(private flgService:FlightService,private title:Title) {
        this.flights =flgService.getFlightList();
        this.title.setTitle('Flight listing page');
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
        this.flgService.getFlightList()
        
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

    pushNewItem(){
        this.flights.push( {
            id: 3,
            logo: "assets/flights/2.png",
            name: "Indigo",
            flight_no: "IND-54443",
            from: 'Sri lanka ',
            to: 'London',
            from_date: '23rd April 2018 05:20',
            to_date: '23rd April 2018 07:20'
        });
    }


}
