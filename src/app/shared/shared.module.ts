import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircleButtonComponent } from './components/circle-button/circle-button.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CircleButtonComponent
  ],
  exports: [
    CircleButtonComponent
  ],
})
export class SharedModule { }
