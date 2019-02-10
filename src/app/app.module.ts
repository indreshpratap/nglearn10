import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { appComponents } from './components';
import { AppComponent, appContainers } from './containers';
import { FlightService } from './services/flight.service';
import { appRoutes } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { ApiClient } from './services/api-client.service';

@NgModule({
  declarations: [...appComponents, ...appContainers],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    // ExamplesModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FlightService, ApiClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
