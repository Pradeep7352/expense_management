import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ExpenseComponent } from './expense/expense.component';
import { AddExpenseComponent } from './expense/add-expense/add-expense.component';
import { EditExpenseComponent } from './expense/edit-expense/edit-expense.component';


const routes: Routes = [
    { path: 'expense', component: ExpenseComponent },
    { path: 'addExpense', component: AddExpenseComponent },
    { path: 'editExpense/:id', component: EditExpenseComponent }
];
@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule
    ],
    exports: [RouterModule],
    declarations: []
})
export class ExpenseRoutingModule { }

