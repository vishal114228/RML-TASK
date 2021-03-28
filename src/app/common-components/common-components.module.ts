import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { DialogComponent } from './dialog/dialog.component';
import { MaterialModule } from 'src/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, DialogComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [HeaderComponent, DialogComponent]
})
export class CommonComponentsModule { }
