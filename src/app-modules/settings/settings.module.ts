import { NgModule } from '@angular/core';
import { UiKitModule } from '../ui-kit/ui-kit.module';
import { settingsContainers, settingRoutes } from './containers';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: settingsContainers,
    imports: [UiKitModule,
        RouterModule.forChild(settingRoutes)
    ],
    exports: [],
    providers: [],
})
export class SettingsModule { } 