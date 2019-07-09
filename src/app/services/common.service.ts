import { Injectable } from '@angular/core';


@Injectable()
export class CommonService {

    constructor() { }


    // // these services used in settings component
    // saveBudgetDetail(budget) {
    //     localStorage.setItem('budget', JSON.stringify(budget));
    // }

    // getBudgetDetail() {
    //     return JSON.parse(localStorage.getItem('budget'));
    // }

    // saveCategoryDetail(categoryList) {
    //     localStorage.setItem('categories', JSON.stringify(categoryList));
    // }

    // getCategoryDetail() {
    //     return JSON.parse(localStorage.getItem('categories'));
    // }

    // // these services used in expense component

    // saveExpenseDetail(expenseData) {
    //     localStorage.setItem('expense', JSON.stringify(expenseData));
    // }

    // getExpencesList() {
    //     return JSON.parse(localStorage.getItem('expense'));
    // }


    postData(url, data) {
        console.log(url, data);
        localStorage.setItem(url, JSON.stringify(data));
    }

    getData(url) {
        return JSON.parse(localStorage.getItem(url));
    }
}