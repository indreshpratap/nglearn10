import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { BindingsComponent } from './examples/bindings.component';
import { StructuralComponent } from './examples/structural.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BindingsComponent,
    StructuralComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
