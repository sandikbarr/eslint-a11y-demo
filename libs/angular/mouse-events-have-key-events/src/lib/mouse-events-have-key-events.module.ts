import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MouseEventsHaveKeyEventsComponent } from './mouse-events-have-key-events.component';
import { CustomButtonModule } from 'my-custom-components/button';

@NgModule({
  imports: [
    CommonModule,
    CustomButtonModule,

    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: MouseEventsHaveKeyEventsComponent}
    ]),
  ],
  declarations: [MouseEventsHaveKeyEventsComponent],
})
export class MouseEventsHaveKeyEventsModule {}
