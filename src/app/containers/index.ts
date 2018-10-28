import { AppComponent } from "./app/app.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";

export const appContainers = [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent
];


export * from './app/app.component'; 
export * from  './home/home.component';
export * from './login/login.component';
export * from './register/register.component';
// export * from './';