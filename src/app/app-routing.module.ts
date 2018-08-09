import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const ROUTES: Routes = [
  {path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
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
