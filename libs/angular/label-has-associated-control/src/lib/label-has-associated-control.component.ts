import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'eslint-a11y-demo-label-has-associated-control',
  template: `
    <form>
      <section>
        <!-- matching for and id -->
        <label for="name">Name</label>
        <input type="text" id="name" />

        <!-- matching [for] and [id] -->
        <label [for]="emailInputId">Email</label>
        <input type="text" [id]="emailInputId" />

        <!-- matching [attr.for] and [id] -->
        <label [attr.for]="phoneInputId">Phone</label>
        <input type="text" [id]="phoneInputId" />

        <!-- label wrapping control -->
        <label><input type="checkbox" />Subscribe to Updates</label>

        <!-- configured for my-custom-control -->
        <label><my-custom-control></my-custom-control>Agree to Terms</label>

        <div>
          <!-- configured for my-custom-label and id input -->
          <my-custom-control aria-labelledby="email-confirm"></my-custom-control>
          <my-custom-label id="email-confirm">Email Confirmation</my-custom-label>
        </div>
      </section>

      <section>
        <div>
          <button type="submit">Submit</button>
          <button>Cancel</button>
        </div>
      </section>
    </form>
  `,
  styleUrls: ['./label-has-associated-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelHasAssociatedControlComponent {
  emailInputId = 'email';
  phoneInputId = 'phone';
}
