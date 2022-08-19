import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'my-custom-label',
  template: `
    <label [id]="internalId" [for]>
      <ng-content></ng-content>
    </label>
  `,
  styleUrls: ['./label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelComponent {
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('aria-labelledby') ariaLabelledBy?: string;

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('id') internalId?: string;

  @HostBinding('attr.id') externalId = '';
}
