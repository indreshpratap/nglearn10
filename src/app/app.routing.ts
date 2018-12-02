import { LoginComponent, HomeComponent, RegisterComponent } from "./containers";
import { Routes } from "@angular/router";

export const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {
        path: 'home', component: HomeComponent,
        children: [
            {
                path: 'student', // attaching student module with main app under this context, and it is call lazy-loading as well.
                loadChildren: '../app-modules/student/student.module#StudentModule'
            },
            {
                path: 'settings', 
                loadChildren: '../app-modules/settings/settings.module#SettingsModule'
            }
        ]
    },
]