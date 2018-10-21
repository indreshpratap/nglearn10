import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';




import { FlightService } from './services/flight.service';
import { ExamplesModule } from 'src/app-modules/examples/examples.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ExamplesModule
  ],
  providers: [FlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
