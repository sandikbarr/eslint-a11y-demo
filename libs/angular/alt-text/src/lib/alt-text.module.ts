import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AltTextComponent } from './alt-text.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: AltTextComponent}
    ]),
  ],
  declarations: [AltTextComponent],
})
export class AltTextModule {}
