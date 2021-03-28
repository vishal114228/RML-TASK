import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { MaterialModule } from 'src/material.module';
import { CommonComponentsModule } from '../common-components/common-components.module';




@NgModule({
  declarations: [UsersComponent, UserListComponent, UserInfoComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModule,
    CommonComponentsModule

  ]
})
export class UsersModule { }
