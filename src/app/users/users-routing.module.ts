import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../providers/auth-guard.guard';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserListComponent } from './user-list/user-list.component';
import { UsersComponent } from './users.component';


const routes: Routes = [{
  path: '', component: UsersComponent,
  children: [
    {
      path: '',
      component: UserListComponent,
      canActivate: [AuthGuard]
    },
    {
      path: ':id',
      component: UserInfoComponent,
      canActivate: [AuthGuard]
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
