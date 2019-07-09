import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
    { path: '', component: SettingsComponent }
];
@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule
    ],
    exports: [RouterModule],
    declarations: []
})
export class SettingsRoutingModule { }

