import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource, PageEvent } from '@angular/material';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { constants } from 'src/app/providers/constants';
import { ApiService } from 'src/app/providers/services/api.service';
import { ParamsService } from 'src/app/providers/services/params.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

  userList: any = [];
  pageIndex: number;
  totalUsers: number;
  pageSize: number;
  pageEvent: number;
  displayedColumns: string[] = ['Id', 'First Name', 'Last Name', 'View User'];
  pageSizeOptions: number[] = [5, 10, 25, 50];
  subscription: Subscription = new Subscription();
  constructor(private apiService: ApiService, private router: Router, private paramService: ParamsService,
  ) { }

  ngOnInit() {
    if (this.paramService.getParams('PageSize').error) {
      this.pageSize = this.pageSizeOptions[0]//NO page size is set , hence take default page size(5) and page index(0)
      this.pageIndex = 0
    } else {
      this.pageSize = this.paramService.getParams('PageSize');// take page size and page index from already set value 
      this.pageIndex = this.paramService.getParams('PageIndex');
    }
    this.getUsersList()
  }

  getUsersList() {
    this.subscription.add(
      this.apiService.get(constants.API_URL.ALL_USERS + '?page=' + this.pageIndex + '&per_page=' + this.pageSize).subscribe(
        response => {
          this.totalUsers = response.total;
          this.userList = new MatTableDataSource(response.data);
        })
    );
  }

  getNextPageUserData(data: PageEvent) {
    if (data.previousPageIndex >= 0) {//cuz data for pageIndex 0 and 1 is same 
      data.pageIndex++;
      this.pageIndex = data.pageIndex;
      this.pageSize = data.pageSize;
      this.getUsersList();
    }
  }

  showUser(row: any) {
    this.router.navigate(['dashboard', row.id])
    this.paramService.setParams('PageSize', this.pageSize);// here set page size and page index,so that if user back to dashboard he'll be on same pageSize and pageIndex 
    this.paramService.setParams('PageIndex', this.pageIndex);
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
