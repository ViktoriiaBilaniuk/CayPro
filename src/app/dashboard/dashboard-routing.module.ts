import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const DASHBOARD_ROUTES: Routes = [

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


