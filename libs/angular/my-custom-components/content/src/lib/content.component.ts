import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'my-custom-content',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentComponent {}
