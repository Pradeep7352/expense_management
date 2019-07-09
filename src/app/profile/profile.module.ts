import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProfileRoutingModule } from '../profile/profile.routing.module'
import { FormsModule } from '@angular/forms'
import { ProfileComponent } from '../profile/profile/profile.component';

@NgModule({
    declarations: [
        ProfileComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ProfileRoutingModule
    ],
    providers: []

})
export class ProfileModule { }
