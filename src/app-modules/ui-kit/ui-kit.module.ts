import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { pipes } from './pipes';
import {uiDirectives} from './directives';
@NgModule({
    declarations: [...pipes,...uiDirectives],
    imports: [ CommonModule,FormsModule,ReactiveFormsModule ],
    exports: [...pipes,...uiDirectives,CommonModule,FormsModule,ReactiveFormsModule],
    providers: [],
})
export class UiKitModule {}