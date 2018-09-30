import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {AuthGuard} from './core/guards/auth.guard';

export const ROUTES: Routes = [
  {path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', canActivate: [AuthGuard], },
  {path: '', pathMatch: 'full', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
