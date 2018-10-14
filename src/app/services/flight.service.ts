import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable()
export class FlightService {

    private list;

    constructor(private meta:Meta) {
        this.list = [
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
    getFlightList() {
        return [...this.list];
    }

}