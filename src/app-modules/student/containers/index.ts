import { StuListingComponent } from "./stu-listing/stu-listing.component";
import { StuRegistrationComponent } from "./stu-registration/stu-registration.component";
import { Routes } from "@angular/router";
import { ConfirmGuard } from "./stu-registration/confirm.guard";

export const studentContainers = [
    StuListingComponent,
    StuRegistrationComponent
];


export const studentRoutes: Routes = [
    // {path:'',component:StuListingComponent},
    { path: '', redirectTo: 'list' },
    { path: 'registration', component: StuRegistrationComponent,
    canDeactivate:[ConfirmGuard] },
    { path: 'list', component: StuListingComponent }
];