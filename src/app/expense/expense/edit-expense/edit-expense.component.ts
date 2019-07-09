import { Component, OnInit } from '@angular/core';

import { CommonService } from '../../../services/common.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ExpenseModel } from '../../../models/espense.model';
import { ConstantFile } from 'src/app/services/constantFile';

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
  constructor(private commonService: CommonService, private router: Router, private activatedRoute: ActivatedRoute) { }

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
    this.commonService.postData(this.costantData.urlExpense, this.expenseList);
    this.router.navigate(['']);
  }


}
