import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ElementsContentComponent } from './elements-content.component';
import { CustomContentModule } from 'my-custom-components/content';

@NgModule({
  imports: [
    CommonModule,
    CustomContentModule,

    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: ElementsContentComponent}
    ]),
  ],
  declarations: [ElementsContentComponent],
})
export class ElementsContentModule {}
