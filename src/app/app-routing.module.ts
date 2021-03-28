import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './providers/auth-guard.guard';

const routes: Routes = [
  { path: 'login', canActivate: [AuthGuard],  loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'dashboard', canActivate: [AuthGuard], loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }