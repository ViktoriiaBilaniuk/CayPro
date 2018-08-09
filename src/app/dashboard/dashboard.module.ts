import {NgModule} from '@angular/core';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {MatChipsModule, MatInputModule} from '@angular/material';
import { TestComponent } from './test/test.component';


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
    TestComponent
  ],
  providers: [],
})
export class DashboardModule { }
