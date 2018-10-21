import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'yesno' })
export class YesNoPipe implements PipeTransform {
    transform(value: boolean): any {
        return this.check(value);
    }


    private check(value) {
        return value === true ? 'Yes' : 'No';
    }
}