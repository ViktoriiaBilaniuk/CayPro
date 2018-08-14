import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {TestComponent} from './test/test.component';
import {DashboardComponent} from './dashboard.component';
import {TitleComponent} from './title/title.component';
import {MainComponent} from "./main/main.component";
import {ProjectDetailsComponent} from "./main/projects/project-details/project-details.component";
import {ProjectsComponent} from "./main/projects/projects.component";
import {fadeInAnimation} from '../shared/animations/fade-in.animation';

export const DASHBOARD_ROUTES: Routes = [
  {path: '', component: DashboardComponent, children: [
      {path: '', pathMatch: 'full', redirectTo: 'title'},
      {path: 'test', component: TestComponent},
      {path: 'title', component: TitleComponent},
      {path: 'main', component: MainComponent,
        children: [
          {path: 'projects', component: ProjectsComponent},
          {path: 'details/:id', component: ProjectDetailsComponent},
          {path: '', pathMatch: 'full', redirectTo: 'projects'},
        ]
      },

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


