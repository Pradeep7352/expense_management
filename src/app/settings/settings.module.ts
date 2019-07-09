import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SettingsRoutingModule } from './settings.routing.module';
import { SettingsComponent } from './settings/settings.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [

        SettingsComponent
    ],
    imports: [
        SettingsRoutingModule,
        FormsModule,
        CommonModule
    ],
    providers: []

})
export class SettingsModule { }
