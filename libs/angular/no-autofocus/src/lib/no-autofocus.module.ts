import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NoAutofocusComponent } from './no-autofocus.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: NoAutofocusComponent}
    ]),
  ],
  declarations: [NoAutofocusComponent],
})
export class NoAutofocusModule {}
