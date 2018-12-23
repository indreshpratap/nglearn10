import { NgModule } from '@angular/core';
import { UiKitModule } from '../ui-kit/ui-kit.module';
import { studentContainers, studentRoutes } from './containers';
import { RouterModule } from '@angular/router';
import { studentComponents } from './components';

@NgModule({
    declarations: [...studentContainers,...studentComponents],
    imports: [
        UiKitModule,
        RouterModule.forChild(studentRoutes)
    ],
    exports: [],
    providers: [],
})
export class StudentModule { }