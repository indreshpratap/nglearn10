import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { pipes } from './pipes';
import {uiDirectives} from './directives';
@NgModule({
    declarations: [...pipes,...uiDirectives],
    imports: [ CommonModule,FormsModule ],
    exports: [...pipes,...uiDirectives,CommonModule,FormsModule],
    providers: [],
})
export class UiKitModule {}