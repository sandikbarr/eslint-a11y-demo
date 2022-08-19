import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'eslint-a11y-demo-no-autofocus',
  template: `
  <section>
    <!-- autofocus not permitted -->
    <input type="text" [attr.autofocus]="true">
    <input type="text" [attr.autofocus]="false">
    <input type="text" autofocus>
  </section>

  <section>
    <!-- does not support custom auto focus directives -->
    <textarea myCustomAutoFocus></textarea>
  </section>
  `,
  styleUrls: ['./no-autofocus.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoAutofocusComponent {}
