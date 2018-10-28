import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-structural',
    templateUrl: './structural.component.html',
    // styleUrls: ['./structural.component.css']
})
export class StructuralComponent {
    isInfo = false;
    isWarning = false;
    isDanger = false;

    message = "Hi your password is expired in 100";
    counter = 100;
    errors = null;

    colors = [];

    yourarray = [];

    type=0;

    constructor(){
        this.colors = ['White','Green','Blue'];

        this.yourarray.push({name:"user1",address:"Noida",mobile:"5555"});
        this.yourarray.push({name:"user2",address:"Delhi",mobile:"666"});
        this.yourarray.push({name:"user31",address:"Gurgoan",mobile:"7777"});
    }

    toogleInfo() {
        this.isInfo = !this.isInfo;
    }
    toogleWarning() {
        this.isWarning = !this.isWarning;
    }

    toogleDanger() {
        this.isDanger = !this.isDanger;
    }

    clear() {
        this.message = null;
        this.errors = null;
    }
    addMessage() {
        this.message = "Hi your password is expired in " + (--this.counter);

    }

    toogleError(flag) {
        this.createDefault();

        if (flag === 1) {
            this.errors.required = !this.errors.required;
        } else if (flag === 2) {
            this.errors.minlength = !this.errors.minlength;

        }
    }

    createDefault() {
        if (this.errors === null) {
            this.errors = {};
        }
    }

    removeRow(index){
        this.yourarray.splice(index,1);
    }

    addRow(){
        this.yourarray.push({name:"user "+this.yourarray.length,address:"Gurgoan",mobile:"7777"});
    }

    changeType(currentType) {
        this.type = currentType;
    }
}
