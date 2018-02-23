import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateComponent } from './profile/update/update.component';
import { ListComponent } from './profile/list/list.component';

import { AuthGuard } from './auth/auth.guard';
import { AdminGuard } from './auth/admin.guard';
import { LogoutGuard } from './auth/logout.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent, canActivate: [LogoutGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [LogoutGuard] },
  { path: 'profile', component: UpdateComponent, canActivate: [AuthGuard]},
  { path: 'profile/:id', component: UpdateComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'list', component: ListComponent, canActivate: [AuthGuard, AdminGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
