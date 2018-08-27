import {NgModule} from '@angular/core';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {MatChipsModule, MatDialog, MatDialogModule, MatInputModule, MatMenuModule, MatSelectModule} from '@angular/material';
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
    FiltersComponent
  ],
  entryComponents: [
    ProjectCostComponent,
  ],
  providers: [],
})
export class DashboardModule { }
