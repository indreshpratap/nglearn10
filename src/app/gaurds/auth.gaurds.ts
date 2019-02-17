import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth-service';

@Injectable({providedIn:'root'})
export class AuthGuard implements CanActivate,CanActivateChild {
    constructor(private router:Router,private authService:AuthService){}
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
      return this.checkLoggedIn();
    }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkLoggedIn();
    }

    checkLoggedIn() {
       
    if(this.authService.isLoggedIn()) {
        return true;
    }else {
        this.router.navigate(['login']);
        return false;
    }
    }
}
