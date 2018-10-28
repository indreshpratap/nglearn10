import { NgModule } from "@angular/core";
import { exampleContainers } from "./containers";
import { UiKitModule } from "../ui-kit/ui-kit.module";
import { RouterModule } from "@angular/router";
import { exampleRoutes } from "./examples.routing";


@NgModule({
    declarations:exampleContainers,
    exports:exampleContainers,
    imports:[UiKitModule,RouterModule.forChild(exampleRoutes)]
})
export class ExamplesModule {}