import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ExpenseComponent } from './expense/expense.component';
import { AddExpenseComponent } from './expense/add-expense/add-expense.component';
import { EditExpenseComponent } from './expense/edit-expense/edit-expense.component';

import { ExpenseRoutingModule } from './expense.routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [

        ExpenseComponent,
        AddExpenseComponent,
        EditExpenseComponent
    ],
    imports: [
        ExpenseRoutingModule,
        CommonModule,
        FormsModule
    ],
    providers: []

})
export class ExpenseModule { }
