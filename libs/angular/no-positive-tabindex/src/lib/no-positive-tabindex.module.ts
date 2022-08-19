import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NoPositiveTabindexComponent } from './no-positive-tabindex.component';
import { CustomContentModule } from 'my-custom-components/content';

@NgModule({
  imports: [
    CommonModule,
    CustomContentModule,

    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: NoPositiveTabindexComponent}
    ]),
  ],
  declarations: [NoPositiveTabindexComponent],
})
export class NoPositiveTabindexModule {}
