import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/providers/services/api.service';
import { constants } from 'src/app/providers/constants';
import { ToastService } from 'src/app/providers/services/toast.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit , OnDestroy {
  loginForm: FormGroup;
  subscription: Subscription = new Subscription();

  constructor(private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private toastService: ToastService
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [null, Validators.compose([Validators.required, Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')])],
      password: [null, Validators.compose([Validators.required, Validators.pattern('.{6,20}')])]
    });
  }

  login(loginForm: any) {
    if (!loginForm.valid) {
      return;
    }
    const userCred = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }

    this.apiService.post(constants.API_URL.LOGIN, userCred).subscribe(
      res => {
        if (res) {
          localStorage.setItem("userToken", res.token);
          this.router.navigate(["/dashboard"])
        }
      }, error => {
        const errorMessage = error.error;
        this.toastService.displayToast(errorMessage, "error")
      }
    )
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}


