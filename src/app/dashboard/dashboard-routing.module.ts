import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {TestComponent} from './test/test.component';

export const DASHBOARD_ROUTES: Routes = [
  {path: 'test', component: TestComponent },
  {path: '', pathMatch: 'full', redirectTo: 'test'}
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


