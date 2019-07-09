import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: '../app/home/home/home.module#HomeModule' },
  { path: 'expense', loadChildren: '../app/expense/expense.module#ExpenseModule' },
  { path: 'settings', loadChildren: '../app/settings/settings.module#SettingsModule' },
  { path: 'profile', loadChildren: '../app/profile/profile.module#ProfileModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
