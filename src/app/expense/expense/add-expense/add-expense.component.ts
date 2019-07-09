import { Component, OnInit } from '@angular/core';
import { ExpenseModel } from '../../../models/espense.model';
import { CommonService } from '../../../services/common.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ConstantFile } from 'src/app/services/constantFile';
import * as storeReducer from '../../../store/store.reducer';
import { Store } from '@ngrx/store';
import * as StoreAction from '../../../store/store.action';
@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss'],
  providers: [CommonService]
})
export class AddExpenseComponent implements OnInit {

  public expenseDetail: ExpenseModel = {
    categoryName: null,
    itemName: null,
    amount: null,
    date: null,
    isSoftDeleted: false
  };
  public categoryList: any[] = [];
  public expensesList: any[] = [];
  private costantData = new ConstantFile();
  constructor(private commonService: CommonService, private router: Router, private store: Store<storeReducer.AppState>) { }

  ngOnInit() {
    // this.store.select('expense').subscribe(state => {
    //   console.log('store expenses', state);
    // });
    if (this.commonService.getData(this.costantData.urlCategory) != null) {
      this.categoryList = this.commonService.getData(this.costantData.urlCategory);
    } else {
      alert('Please add category first');
      this.router.navigate(['settings']);
    }
    if (this.commonService.getData(this.costantData.urlExpense) != null) {
      this.expensesList = this.commonService.getData(this.costantData.urlExpense);
    }
  }

  onSubmitExpense(ngForm) {

    if (this.expenseDetail.categoryName != null && this.expenseDetail.date != null) {
      this.commonService.postData(this.costantData.urlExpense, this.expensesList);
      this.store.dispatch(new StoreAction.AddExpensesAction({ expensesData: this.expenseDetail }));
      this.router.navigate(['']);
    } else {
      alert('Please enter proper data');
    }

  }

}
