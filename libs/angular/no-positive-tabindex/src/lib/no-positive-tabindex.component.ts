import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'eslint-a11y-demo-no-positive-tabindex',
  template: `
    <section>
      <!-- has positive tabindex -->
      <div tabindex="5"></div>
      <div [attr.tabindex]="21"></div>
    </section>

    <section>
      <!-- no tabindex -->
      <span></span>

      <!-- has tabindex of 0 or undefined/null -->
      <span tabindex></span>
      <span tabindex="0"></span>
      <span [attr.tabindex]="0"></span>

      <!-- ignores variable binding -->
      <span [attr.tabindex]="positiveTabIndex"></span>
    </section>

    <section>
      <!-- has tabindex of -1 -->
      <input type="text" tabindex="-1" />
    </section>

    <section>
      <!-- positive tabindex on custom element -->
      <my-custom-content tabindex="1"></my-custom-content>

      <!-- ignores bound inputs on custom elements -->
      <my-custom-content [tabindex]="1"></my-custom-content>
      <my-custom-content [attr.tabindex]="1"></my-custom-content>
    </section>
  `,
  styleUrls: ['./no-positive-tabindex.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoPositiveTabindexComponent {
  positiveTabIndex = 5;
}
