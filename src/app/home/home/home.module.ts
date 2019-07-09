import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home.routing.module';
import { NgxPaginationModule } from 'ngx-pagination';

import { HomeComponent } from './home.component';

@NgModule({
    declarations: [

        HomeComponent
    ],
    imports: [
        HomeRoutingModule,
        CommonModule,
        NgxPaginationModule
    ],
    providers: []

})
export class HomeModule { }
