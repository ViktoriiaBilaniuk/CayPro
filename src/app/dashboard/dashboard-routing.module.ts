import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {TestComponent} from './test/test.component';
import {DashboardComponent} from './dashboard.component';
import {TitleComponent} from './title/title.component';
import {MainComponent} from './main/main.component';
import {ProjectDetailsComponent} from './main/projects/project-details/project-details.component';
import {ProjectsComponent} from './main/projects/projects.component';
import {AddProjectComponent} from './main/projects/add-project/add-project.component';
import {CompaniesComponent} from './main/companies/companies.component';
import {AddCompanyComponent} from './main/companies/add-company/add-company.component';
import {CompanyDetailsComponent} from './main/companies/company-details/company-details.component';
import {PortfolioComponent} from './main/portfolio/portfolio.component';
import {SuitableComponent} from "./main/suitable/suitable.component";
import {MyProjectsComponent} from "./main/my-projects/my-projects.component";

export const DASHBOARD_ROUTES: Routes = [
  {path: '', component: DashboardComponent, children: [
      {path: '', pathMatch: 'full', redirectTo: 'title'},
      {path: 'test', component: TestComponent},
      {path: 'title', component: TitleComponent},
      {path: 'main', component: MainComponent,
        children: [
          {path: 'projects', component: ProjectsComponent},
          {path: 'project/:id', component: ProjectDetailsComponent},
          {path: 'add', component: AddProjectComponent},
          {path: 'companies', component: CompaniesComponent},
          {path: 'company/:id', component: CompanyDetailsComponent},
          {path: 'add-company', component: AddCompanyComponent},
          {path: 'portfolio', component: PortfolioComponent},
          {path: 'my-projects', component: MyProjectsComponent},
          {path: 'suitable', component: SuitableComponent},
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


