import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'my-custom-control',
  template: `
    <input type="checkbox" [attr.aria-labelledby]="ariaLabelledBy">
  `,
  styleUrls: ['./control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlComponent {
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('aria-labelledby') ariaLabelledBy?: string;
}
