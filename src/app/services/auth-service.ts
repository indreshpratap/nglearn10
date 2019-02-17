import { Injectable } from '@angular/core';
import { Subject, ReplaySubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private _user;
    private onLogin = new ReplaySubject(2);

    constructor(private router:Router) {
        let role = localStorage.getItem("role");
        let name = localStorage.getItem("name");
        if (role && name) {
            this._user = { role, name };
            this.notify();
        }
    }

    afterLogin() {
        return this.onLogin.asObservable();
    }

    setUser(user) {

        this._user = user;
        localStorage.setItem("role", user.role);
        localStorage.setItem("name", user.name);
        this.notify();

    }

    private notify() {
        this.onLogin.next();
    }

    isLoggedIn() {
        return this._user && this._user.role;
    }

    logout(){
        localStorage.clear();
        this._user=null;
       this.notify();
        this.router.navigate(['login']);
    }


}