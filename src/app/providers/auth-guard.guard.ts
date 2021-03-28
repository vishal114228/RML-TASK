import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastService } from './services/toast.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router,private toastService:ToastService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userLoogedIn = localStorage.getItem('userToken');

    if (state.url === "/login") {//if user already visited and do not logged out , redirect to dashboard
      if (userLoogedIn) {
        this.router.navigate(['/dashboard']);
      } else {
        return true;
      }
    }

    if (userLoogedIn) { // if token is present allow navigation else redirect to login
      return true;
    } else {
      this.toastService.displayToast("User is not authorized","error")
      this.router.navigate(['/login']);
      return false;
    }
  }


}
