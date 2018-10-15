import {NgModule} from '@angular/core';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatAutocompleteModule,
  MatChipsModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatSelectModule
} from '@angular/material';
import { TestComponent } from './test/test.component';
import {DashboardComponent} from './dashboard.component';
import { TitleComponent } from './title/title.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './main/header/header.component';
import { ProjectsComponent } from './main/projects/projects.component';
import { ProjectItemComponent } from './main/projects/project-item/project-item.component';
import { ProjectDetailsComponent } from './main/projects/project-details/project-details.component';
import { ProjectCostComponent } from './main/projects/project-details/project-cost/project-cost.component';
import { FiltersComponent } from './main/projects/filters/filters.component';
import {Ng5SliderModule} from 'ng5-slider';
import { AddProjectComponent } from './main/projects/add-project/add-project.component';
import { TeamComponent } from './main/projects/add-project/team/team.component';
import { CompaniesComponent } from './main/companies/companies.component';
import { AddCompanyComponent } from './main/companies/add-company/add-company.component';
import { CompanyItemComponent } from './main/companies/company-item/company-item.component';
import { CompanyDetailsComponent } from './main/companies/company-details/company-details.component';
import { CompanyDetailsProjectItemComponent } from './main/companies/company-details/company-details-project-item/company-details-project-item.component';
import { PortfolioComponent } from './main/portfolio/portfolio.component';
import { PortfolioProjectsComponent } from './main/portfolio/portfolio-projects/portfolio-projects.component';

@NgModule({
  imports: [
    DashboardRoutingModule,
    CommonModule,
    SharedModule,
    FormsModule,
    MatChipsModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    Ng5SliderModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatIconModule,
    MatAutocompleteModule,
  ],
  declarations: [
    TestComponent,
    DashboardComponent,
    TitleComponent,
    MainComponent,
    HeaderComponent,
    ProjectsComponent,
    ProjectItemComponent,
    ProjectDetailsComponent,
    ProjectCostComponent,
    FiltersComponent,
    AddProjectComponent,
    TeamComponent,
    CompaniesComponent,
    AddCompanyComponent,
    CompanyItemComponent,
    CompanyDetailsComponent,
    CompanyDetailsProjectItemComponent,
    PortfolioComponent,
    PortfolioProjectsComponent,
  ],
  entryComponents: [
    ProjectCostComponent,
    PortfolioProjectsComponent
  ],
  providers: [
    FormBuilder,
  ],
})
export class DashboardModule { }
