import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  showToast: boolean = false;
  toastType: string;
  toastMessage: string;

  constructor() { }


  displayToast(message: string, type: string) {
    this.showToast = true;
    this.toastType = type;
    this.toastMessage = message;
  }

  hideToast() {
    this.showToast = false;
  }
}
