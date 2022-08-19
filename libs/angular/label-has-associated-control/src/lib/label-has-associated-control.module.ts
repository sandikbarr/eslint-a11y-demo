import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LabelHasAssociatedControlComponent } from './label-has-associated-control.component';
import { CustomControlModule } from 'my-custom-components/control';
import { CustomLabelModule } from 'my-custom-components/label';

@NgModule({
  imports: [
    CommonModule,
    CustomControlModule,
    CustomLabelModule,

    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: LabelHasAssociatedControlComponent,
      },
    ]),
  ],
  declarations: [
    LabelHasAssociatedControlComponent,
  ],
})
export class LabelHasAssociatedControlModule {}
