import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'eslint-a11y-demo-click-events-have-key-events',
  template: `
    <section>
      <!-- has both click and key events -->
      <div (click)="onClick()" (keyup)="onKeyup()">div has (click) and (keyup)</div>

      <!-- has both click and key events -->
      <div (click)="onClick()" (keyup.enter)="onKeyup()">div has (click) and (keyup.enter)</div>
    </section>

    <section>
      <!-- has a static value for aria-hidden -->
      <div (click)="onClick()" aria-hidden>aria-hidden</div>
      <div (click)="onClick()" aria-hidden="true">aria-hidden="true"</div>
      <div (click)="onClick()" [attr.aria-hidden]="true">[attr.aria-hidden]="true"</div>
      <div (click)="onClick()" [attr.aria-hidden]="'false'">[attr.aria-hidden]="'false'"</div>
    </section>

    <section>
      <!-- has a presentation role -->
      <div (click)="onClick()" role="presentation">role="presentation"</div>
      <div (click)="onClick()" role="header">role="header"</div>
      <div (click)="onClick()" [attr.role]="'none'">[attr.role]="'none'"</div>
    </section>

    <section>
      <!-- element is interactive -->
      <input (click)="onClick()" placeholder='(click)="onClick()"' />
      <button (click)="onClick()">(click)="onClick()"</button>
      <textarea (click)="onClick()">(click)="onClick()"</textarea>
      <select (click)="onClick()">
        <option (click)="onClick()">(click)="onClick()"</option>
      </select>
      <header (click)="onClick()">header with (click)="onClick()"</header>
    </section>

    <section>
      <!-- anchor must have href/routerLink for default interactive behavior -->
      <a (click)="onClick()">Link With No href</a>
      <a href="#" (click)="onClick()">Link with (click) and href="#"</a>
      <a [attr.href]="href" class="anchor" (click)="onClick()"
        >Link with (click) and [attr.href]</a
      >
      <a [routerLink]="'route'" (click)="onClick()"
        >Link with (click) and [routerLink]</a
      >
    </section>

    <section>
      <!-- cannot be configured with custom elements -->
      <my-custom-button (click)="onClick()">Custom Button</my-custom-button>
    </section>
  `,
  styleUrls: ['./click-events-have-key-events.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClickEventsHaveKeyEventsComponent {
  href = '/some/route';

  onClick(): void {
    //
  }

  onKeyup(): void {
    //
  }
}
