import { Routes } from "@angular/router";
import { BindingsComponent, ClassStyleComponent, ExampleComponent } from "./containers";


export const exampleRoutes: Routes = [
    {
        path: "example", component: ExampleComponent,
        children: [
            { path: "binding", component: BindingsComponent },
            { path: "class-style", component: ClassStyleComponent }

        ]
    }
]