import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClickEventsHaveKeyEventsComponent } from './click-events-have-key-events.component';
import { CustomButtonModule } from 'my-custom-components/button';
import { CustomLabelModule } from 'my-custom-components/label';

@NgModule({
  imports: [
    CommonModule,
    CustomButtonModule,
    CustomLabelModule,

    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: ClickEventsHaveKeyEventsComponent}
    ]),
  ],
  declarations: [ClickEventsHaveKeyEventsComponent],
})
export class ClickEventsHaveKeyEventsModule {}
