import * as StoreAction from './store.action';
import { ExpenseModel } from '../models/espense.model';
import { Store } from '@ngrx/store';
export interface AppState {
    expenses: Array<ExpenseModel>;
}

export interface ExpensesState {
    expenses: AppState;
}

const initialState: AppState = {
    expenses: localStorage.getItem('expense') ? JSON.parse(localStorage.getItem('expense')) : []
}

export function storeReducer(state = initialState, action: StoreAction.StoreAction) {
    switch (action.type) {
        case StoreAction.ADD_EXPENSES:
            const expenses = [...state.expenses];
            expenses.push(action.payload.expensesData);
            return {
                ...state,
                expenses: expenses
            };
        case StoreAction.EDIT_EXPENSES: {
            let expenseData = [...state.expenses];
            expenseData.splice(action.payload.index, 1, action.payload.expensesData);

            return {
                ...state,
                expenses: expenseData
            }
        };
        default:
            return state;
    }
}