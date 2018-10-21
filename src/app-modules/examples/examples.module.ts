import { NgModule } from "@angular/core";
import { exampleComponents } from "./components";
import { UiKitModule } from "../ui-kit/ui-kit.module";


@NgModule({
    declarations:exampleComponents,
    exports:exampleComponents,
    imports:[UiKitModule]
})
export class ExamplesModule {}