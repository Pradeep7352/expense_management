import { Component, OnInit } from '@angular/core';

import { CommonService } from '../../../services/common.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ExpenseModel } from '../../../models/espense.model';
import { ConstantFile } from 'src/app/services/constantFile';
import * as storeReducer from '../../../store/store.reducer';
import { Store } from '@ngrx/store';
import * as StoreAction from '../../../store/store.action';
@Component({
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.sass'],
  providers: [CommonService]
})
export class EditExpenseComponent implements OnInit {

  public expenseDetail: ExpenseModel = {
    categoryName: null,
    itemName: null,
    amount: null,
    date: null,
    isSoftDeleted: false
  };
  private recivedIndex;
  private expenseList: any[] = [];
  public categoryList: any[] = [];
  private costantData = new ConstantFile();
  constructor(private commonService: CommonService, private router: Router, private activatedRoute: ActivatedRoute, private store: Store<storeReducer.AppState>) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((res: any) => {
      this.recivedIndex = res.id;
      this.getExpencesList();
      this.getCategoryList();
    });
  }

  getCategoryList() {
    this.categoryList = this.commonService.getData(this.costantData.urlCategory);
  }

  getExpencesList() {
    this.expenseList = this.commonService.getData(this.costantData.urlExpense);
    this.expenseDetail = this.expenseList[this.recivedIndex];
    this.expenseDetail.date = this.expenseList[this.recivedIndex].date;
  }

  onUpdateExpense(ngForm) {
    this.expenseList[this.recivedIndex] = this.expenseDetail;
    this.store.dispatch(new StoreAction.EditExpensesAction({ expensesData: this.expenseDetail, index: this.recivedIndex }));
    this.router.navigate(['']);
  }


}
