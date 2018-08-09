import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {TestComponent} from './test/test.component';
import {SignupComponent} from '../auth/signup/signup.component';
import {AuthComponent} from '../auth/auth.component';
import {LoginComponent} from '../auth/login/login.component';
import {DashboardComponent} from './dashboard.component';
import {TitleComponent} from './title/title.component';

export const DASHBOARD_ROUTES: Routes = [
  {path: '', component: DashboardComponent, children: [
      {path: '', pathMatch: 'full', redirectTo: 'title'},
      {path: 'test', component: TestComponent},
      {path: 'title', component: TitleComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(DASHBOARD_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule {}


