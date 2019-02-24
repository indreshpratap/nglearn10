import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { StuRegistrationComponent } from 'src/app-modules/student/containers/stu-registration/stu-registration.component';

@Injectable({ providedIn: 'root' })
export class ConfirmGuard implements CanDeactivate<StuRegistrationComponent> {
    canDeactivate(
        component: StuRegistrationComponent,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        if (component.isChanged()) {
            return confirm("Are you sure want to navigate from here? \n All entered data will be lost");
        } else {
            return true;
        }
    }
}