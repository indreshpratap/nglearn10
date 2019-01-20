import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { ExamplesModule } from 'src/app-modules/examples/examples.module';
import { appComponents } from './components';
import { AppComponent, appContainers } from './containers';
import { FlightService } from './services/flight.service';
import { appRoutes } from './app.routing';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [...appComponents,...appContainers],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
   // ExamplesModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
