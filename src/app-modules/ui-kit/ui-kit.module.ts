import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { uiDirectives } from './directives';
import { pipes } from './pipes';
import { PRIMENG } from './primeng';
import { uiComponents } from './components';
@NgModule({
    declarations: [...pipes, ...uiDirectives,...uiComponents],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ...PRIMENG
    ],
    exports: [
        ...pipes,
        ...uiDirectives,
        ...uiComponents,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ...PRIMENG
    ],
    providers: [],
})
export class UiKitModule { }