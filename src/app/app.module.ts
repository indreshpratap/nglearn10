import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { BindingsComponent } from './examples/bindings.component';
import { StructuralComponent } from './examples/structural.component';
import { ClassStyleComponent } from './examples/classstyle.component';
import { FlightListingComponent } from './examples/input_output/flight-listing.component';
import { FlightInfoComponent } from './examples/input_output/flight-info.component';
import { FlightLogoComponent } from './examples/input_output/flight-logo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BindingsComponent,
    StructuralComponent,
    ClassStyleComponent,
    FlightListingComponent,
    FlightInfoComponent,
    FlightLogoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
