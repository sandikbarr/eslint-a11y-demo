import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'my-custom-button',
  template: `<button><ng-content></ng-content></button>`,
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent{}
