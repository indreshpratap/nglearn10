import { BindingsComponent } from './bindings.component';
import { StructuralComponent } from './structural.component';
import { ClassStyleComponent } from './classstyle.component';
import { FlightListingComponent } from './input_output/flight-listing.component';
import { FlightInfoComponent } from './input_output/flight-info.component';
import { FlightLogoComponent } from './input_output/flight-logo.component';
import { PipeExampleComponent } from './pipe.component';
import { TemplateVarComponent } from './templatevar.component';
import { SpecialOfferListingComponent } from './input_output/special-offer-listing.component';

export const exampleComponents = [
    BindingsComponent,
    StructuralComponent,
    ClassStyleComponent,
    FlightListingComponent,
    FlightInfoComponent,
    FlightLogoComponent,
    PipeExampleComponent,
    TemplateVarComponent,
    SpecialOfferListingComponent,

];

//re exporting
export * from './input_output/special-offer-listing.component';