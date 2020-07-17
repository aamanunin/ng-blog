import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';

import {AdminLayoutComponent} from './shared/components/admin-layout/admin-layout.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {DashboardPageComponent} from './dashboard-page/dashboard-page.component';
import {EditPageComponent} from './edit-page/edit-page.component';
import {CreatePageComponent} from './create-page/create-page.component';
import {AuthService} from './shared/services/auth.service';
import {AuthGuard} from './shared/services/auth.guard';

@NgModule({
  declarations: [AdminLayoutComponent, LoginPageComponent, DashboardPageComponent, EditPageComponent, CreatePageComponent, ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild([
      {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
      {
        path: '', component: AdminLayoutComponent, children: [
          {path: 'login', component: LoginPageComponent},
          {path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard]},
          {path: 'post/:id/edit', component: EditPageComponent, canActivate: [AuthGuard]},
          {path: 'create', component: CreatePageComponent, canActivate: [AuthGuard]}
        ]
      },
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [AuthService, AuthGuard]
})
export class AdminModule {
}
