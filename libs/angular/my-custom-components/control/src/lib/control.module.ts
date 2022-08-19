import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlComponent } from './control.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ControlComponent],
  exports: [ControlComponent],
})
export class CustomControlModule {}
