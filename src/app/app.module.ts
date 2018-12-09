import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { ExamplesModule } from 'src/app-modules/examples/examples.module';
import { appComponents } from './components';
import { AppComponent, appContainers } from './containers';
import { FlightService } from './services/flight.service';
import { appRoutes } from './app.routing';


@NgModule({
  declarations: [...appComponents,...appContainers],
  imports: [
    BrowserModule,
    FormsModule,
   // ExamplesModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
