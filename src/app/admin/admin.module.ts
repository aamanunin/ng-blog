import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AdminLayoutComponent} from './shared/components/admin-layout/admin-layout.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {DashboardPageComponent} from './dashboard-page/dashboard-page.component';
import {EditPageComponent} from './edit-page/edit-page.component';
import {CreatePageComponent} from './create-page/create-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [AdminLayoutComponent, LoginPageComponent, DashboardPageComponent, EditPageComponent, CreatePageComponent, ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
      {
        path: '', component: AdminLayoutComponent, children: [
          {path: 'login', component: LoginPageComponent},
          {path: 'dashboard', component: DashboardPageComponent},
          {path: 'post/:id/edit', component: EditPageComponent},
          {path: 'create', component: CreatePageComponent}
        ]
      },
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AdminModule {
}
