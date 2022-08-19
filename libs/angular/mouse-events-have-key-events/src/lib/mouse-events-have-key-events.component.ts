import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'eslint-a11y-demo-mouse-events-have-key-events',
  template: `
    <section>
      <!-- mouseover/mouseout paired with focus/blur -->
      <div (mouseover)="onMouseOver()" (focus)="onFocus()">
        mouseover with focus
      </div>
      <div (mouseout)="onMouseOut()" (blur)="onBlur()">mouseout with blur</div>
      <div
        (mouseover)="onMouseOver()"
        (focus)="onFocus()"
        (mouseout)="onMouseOut()"
        (blur)="onBlur()"
      >
        mouseover with focus and mouseout with blur
      </div>
    </section>

    <section>
      <!-- cannot be configured to work with custom components -->
      <my-custom-button (mouseover)="onMouseOver()">
        Custom Button
      </my-custom-button>
    </section>
  `,
  styleUrls: ['./mouse-events-have-key-events.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MouseEventsHaveKeyEventsComponent {
  onMouseOver(): void {
    //
  }

  onFocus(): void {
    //
  }

  onMouseOut(): void {
    //
  }

  onBlur(): void {
    //
  }
}
