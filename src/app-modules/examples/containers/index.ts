import { BindingsComponent } from './bindings.component';
import { StructuralComponent } from './structural.component';
import { ClassStyleComponent } from './classstyle.component';
import { FlightListingComponent } from './input_output/flight-listing.component';
import { FlightInfoComponent } from './input_output/flight-info.component';
import { FlightLogoComponent } from './input_output/flight-logo.component';
import { PipeExampleComponent } from './pipe.component';
import { TemplateVarComponent } from './templatevar.component';
import { SpecialOfferListingComponent } from './input_output/special-offer-listing.component';
import { ExampleComponent } from './example/example.component';
import { ObservablesComponent } from './observables/observables.component';

export const exampleContainers = [
    BindingsComponent,
    StructuralComponent,
    ClassStyleComponent,
    FlightListingComponent,
    FlightInfoComponent,
    FlightLogoComponent,
    PipeExampleComponent,
    TemplateVarComponent,
    SpecialOfferListingComponent,
    ExampleComponent,
    ObservablesComponent

];

//re exporting
export * from './input_output/special-offer-listing.component';
export * from './bindings.component';
export * from './structural.component';
export * from './classstyle.component';
export * from './input_output/flight-listing.component';
export * from './input_output/flight-info.component';
export * from './input_output/flight-logo.component';
export * from './pipe.component';
export * from './templatevar.component';
export * from './example/example.component';
export * from './observables/observables.component';