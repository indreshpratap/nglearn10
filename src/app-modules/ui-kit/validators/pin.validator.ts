import { FormControl } from "@angular/forms";

export function pincode(control: FormControl) {

    // if there is no value or if value matches 6 digit of number then no error
    if (!control.value || /^\d{6}$/.test(control.value)) {
        return null;
    } else {
        return { pincode: true }; // returns an error type
    }
}