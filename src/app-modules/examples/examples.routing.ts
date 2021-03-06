import { Routes } from "@angular/router";
import { BindingsComponent, ClassStyleComponent, ExampleComponent, ObservablesComponent } from "./containers";


export const exampleRoutes: Routes = [
    {
        path: "", component: ExampleComponent,
        children: [
            { path: "binding", component: BindingsComponent },
            { path: "class-style", component: ClassStyleComponent },
            { path: "observables", component: ObservablesComponent }

        ]
    }
]