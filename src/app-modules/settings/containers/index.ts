import { SetClassesComponent } from "./set-classes/set-classes.component";
import { SetSessionsComponent } from "./set-sessions/set-sessions.component";
import { Routes } from "@angular/router";
import { SetDashboardComponent } from "./set-dashboard/set-dashboard.component";

export const settingsContainers = [
    SetClassesComponent,
    SetSessionsComponent,
    SetDashboardComponent
];

export const settingRoutes:Routes =[
    {path:'',component:SetDashboardComponent},
    {path:'session',component:SetSessionsComponent},
    {path:'classes',component:SetClassesComponent}
];