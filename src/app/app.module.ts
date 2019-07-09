import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { StoreModule } from '@ngrx/store';
import { storeReducer } from './store/store.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    StoreModule.forRoot({ expense: storeReducer }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
