import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    AuthRoutingModule,
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  exports: [],
  declarations: [
    LoginComponent,
    AuthComponent,
  ],
  providers: [],
})
export class AuthModule { }
