import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/common-components/dialog/dialog.component';
import { Router } from '@angular/router';
import { ParamsService } from './params.service';

@Injectable({
  providedIn: 'root'
})
export class CommonMethodsService {

  constructor(private dialog: MatDialog,
    private router: Router,
    private paramService:ParamsService
  ) { }

  logout() {
    this.openDialog('Are you sure you want to logout?').then(
      () => {
        localStorage.clear();
        this.router.navigate(['/login']);
        this.paramService.reset();
      }
    );
  }

  openDialog(logoutMessage:string) {
    return new Promise((resolve, reject) => {
      const dialogRef = this.dialog.open(DialogComponent, {
        width: "250px",
        disableClose: true
      });
      dialogRef.componentInstance.dialogType = "confirmOperation";
      dialogRef.componentInstance.title = logoutMessage;
      dialogRef.afterClosed().subscribe(result => {
        if (result === "confirm") {
          return resolve("");
        }
      });
    });
  }


}
