import { Component, OnInit } from '@angular/core';
import { ExpenseBudget, CategoryModel } from '../../models/settings.model';
import { CommonService } from '../../services/common.service';
import { ConstantFile } from 'src/app/services/constantFile';




@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  providers: [CommonService]
})
export class SettingsComponent implements OnInit {
  public budgetDetail: ExpenseBudget = {
    totalBudget: null,
    totalExpense: null
  };
  public categoryDetail: CategoryModel = {
    categoryName: ''
  };
  public categoryList: any[] = [];
  private constantData = new ConstantFile();

  private urlBudget = 'budget';
  constructor(private commonService: CommonService) {

  }

  // used for save budget total expense and budget in localstorage
  updateBudget() {
    // this.commonService.saveBudgetDetail(this.budgetDetail.totalBudget);
    this.commonService.postData(this.constantData.urlBudget, this.budgetDetail.totalBudget);
  }

  // used for save category detail in localstorage
  addCategoryName() {
    this.categoryList.push({ 'categoryName': this.categoryDetail.categoryName });
    // this.commonService.saveCategoryDetail(this.categoryList);
    this.commonService.postData(this.constantData.urlCategory, this.categoryList);
    this.categoryDetail.categoryName = '';
  }

  // request for delte a category 
  onDeleteCategory(index, name) {
    if (confirm("Are you sure to delete " + name)) {
      this.categoryList.splice(index, 1);
      this.commonService.postData(this.constantData.urlCategory, this.categoryList);
      // this.commonService.saveCategoryDetail(this.categoryList);
    }
  }

  ngOnInit() {
    // this.budgetDetail.totalBudget = this.commonService.getBudgetDetail();
    // this.categoryList = this.commonService.getCategoryDetail();
    this.budgetDetail.totalBudget = this.commonService.getData(this.constantData.urlBudget);
    if (this.commonService.getData(this.constantData.urlCategory) != null) {

      this.categoryList = this.commonService.getData(this.constantData.urlCategory);
    }
    console.log(this.categoryList);

  }

}
