import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/providers/services/toast.service';

@Component({
  selector: 'app-custom-toast',
  templateUrl: './custom-toast.component.html',
  styleUrls: ['./custom-toast.component.scss']
})
export class CustomToastComponent implements OnInit {

  iconClass: string;
  iconColor: string;

  constructor(public toastService: ToastService) { }

  ngOnInit() {
    this.getToastStyle();
  }

  getToastStyle() {
    let type = this.toastService.toastType;
    switch (type) {
      case 'success': this.iconColor = 'green'; this.iconClass = 'done'; break;// success pop-up icon and color
      case 'error': this.iconColor = 'red'; this.iconClass = "clear"; break;// error pop-up
    }
  }

  hideToast() {
    this.toastService.hideToast();
  }
}
