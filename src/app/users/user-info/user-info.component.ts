import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { constants } from 'src/app/providers/constants';
import { ApiService } from 'src/app/providers/services/api.service';
import { ParamsService } from 'src/app/providers/services/params.service';
import { ToastService } from 'src/app/providers/services/toast.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  userData: any;
  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private apiService: ApiService, private toastService: ToastService
  ) {
    this.activatedRoute.paramMap.subscribe(id => {
      this.getUserDataById(+id['params']['id'])
    });
  }

  getUserDataById(id: number) {
    if (id) { //checked for userId in number format
      this.subscription.add(
        this.apiService.get(constants.API_URL.ALL_USERS + '/' + id).subscribe(res => {
          this.userData = res.data;
        }, err => {
          this.toastService.displayToast(err, 'error');// if data is not available for requested userId , back to dashboard
          this.onCancel();
        })
      );
    } else {// if requested userId is in string format or enter by user in string string format
      this.toastService.displayToast("INVALID USER ID", "error");
      this.onCancel();
    }
  }


  ngOnInit() {
  }

  onCancel() {
    this.router.navigate(['/dashboard'])
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
