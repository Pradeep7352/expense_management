import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { Router } from '@angular/router';
import { ConstantFile } from 'src/app/services/constantFile';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [CommonService]
})
export class HomeComponent implements OnInit {
  public currentPageOfPagination = 1;
  public expensesList: any = [];
  private costantData = new ConstantFile();
  constructor(private commonService: CommonService, private router: Router) { }

  ngOnInit() {

    if (this.commonService.getData(this.costantData.urlExpense) != null) {
      this.expensesList = this.commonService.getData(this.costantData.urlExpense);
    }

  }

  editExpenseDetail(index) {
    this.router.navigate(['/expense/editExpense', index]);
  }

  onDeleteExpense(index, name, isForSoftRemove) {

    if (!isForSoftRemove) {
      if (confirm("Are you sure to delete " + name)) {
        this.expensesList[index].isSoftDeleted = true;
        this.commonService.postData(this.costantData.urlExpense, this.expensesList);
      }
    } else {
      if (confirm("Are you sure to re do expense " + name)) {
        this.expensesList[index].isSoftDeleted = false;
        this.commonService.postData(this.costantData.urlExpense, this.expensesList);
      }
    }
  }

}
