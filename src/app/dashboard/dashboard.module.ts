import {NgModule} from '@angular/core';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {MatChipsModule, MatInputModule} from '@angular/material';
import { TestComponent } from './test/test.component';
import {DashboardComponent} from './dashboard.component';
import { TitleComponent } from './title/title.component';
import { MainComponent } from './main/main.component';


@NgModule({
  imports: [
    DashboardRoutingModule,
    CommonModule,
    SharedModule,
    FormsModule,
    MatChipsModule,
    MatInputModule,
  ],
  exports: [],
  declarations: [
    TestComponent,
    DashboardComponent,
    TitleComponent,
    MainComponent
  ],
  providers: [],
})
export class DashboardModule { }
