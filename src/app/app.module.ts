import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { BindingsComponent } from './examples/bindings.component';
import { StructuralComponent } from './examples/structural.component';
import { ClassStyleComponent } from './examples/classstyle.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BindingsComponent,
    StructuralComponent,
    ClassStyleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
