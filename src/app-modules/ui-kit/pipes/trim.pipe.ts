import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'trim' })
export class TrimPipe implements PipeTransform {
    transform(value: string, strLen: number = 10, stripchar = '...'): any {
        return this.trimit(value, strLen, stripchar);
    }
    
    private trimit(value, strLen: number, stripchar: string) {
        console.log(strLen, stripchar);
        if (value && value.length > strLen) {
            return value.substr(0, strLen) + stripchar;
        } else {
            return value;
        }
    }
}