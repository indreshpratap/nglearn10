import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { uiDirectives } from './directives';
import { pipes } from './pipes';
import { PRIMENG } from './primeng';
@NgModule({
    declarations: [...pipes, ...uiDirectives],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ...PRIMENG
    ],
    exports: [
        ...pipes,
        ...uiDirectives,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ...PRIMENG
    ],
    providers: [],
})
export class UiKitModule { }