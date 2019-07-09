import { Action } from '@ngrx/store';
import { ExpenseModel } from '../models/espense.model';

export const ADD_EXPENSES = 'ADD_EXPENSES';
export const EDIT_EXPENSES = 'EDIT_EXPENSES';
// export const ADD_EXPENSES = 'ADD_EXPENSES';
export class AddExpensesAction implements Action {
    readonly type = ADD_EXPENSES;
    constructor(public payload: { expensesData: ExpenseModel }) {

    }
}

export class EditExpensesAction implements Action {
    readonly type = EDIT_EXPENSES;
    constructor(public payload: { expensesData: ExpenseModel, index: number }) {

    }
}

export type StoreAction = AddExpensesAction | EditExpensesAction;