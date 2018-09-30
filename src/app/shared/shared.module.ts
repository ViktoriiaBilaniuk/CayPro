import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircleButtonComponent } from './components/circle-button/circle-button.component';
import { SpinnerComponent } from './components/spinner/spinner.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CircleButtonComponent,
    SpinnerComponent
  ],
  exports: [
    CircleButtonComponent,
    SpinnerComponent
  ],
})
export class SharedModule { }
