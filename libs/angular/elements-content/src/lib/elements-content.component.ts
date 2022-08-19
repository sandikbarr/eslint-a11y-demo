import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'eslint-a11y-demo-elements-content',
  template: `
    <section>
      <!-- elements have no content -->
      <a href="#"></a>
      <h1></h1>
      <button></button>
    </section>

    <section>
      <!-- elements have content -->
      <a href="#">anchor has content</a>
      <a><my-custom-content></my-custom-content></a>
      <h1>heading content</h1>
      <button>button content</button>
    </section>

    <section>
      <!-- supports title and aria-label -->
      <h1 title="heading title"></h1>
      <h2 [attr.aria-label]="headingText"></h2>
    </section>

    <section>
      <!-- supports innerText, innerHTML, outerHTML -->
      <h1 [innerText]="headingText"></h1>
      <h2 [innerHtml]="headingText"></h2>
      <a [innerHTML]="dangerouslySetInnerHTML"></a>
      <button [outerHTML]="dangerouslySetOuterHTML"></button>
    </section>

    <section>
      <!-- ignores elements with aria-hidden -->
      <a aria-hidden></a>
      <h2 aria-hidden></h2>
      <a aria-hidden></a>
      <button aria-hidden></button>
    </section>
  `,
  styleUrls: ['./elements-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ElementsContentComponent {
  headingText = 'heading text';
  dangerouslySetInnerHTML = '<span>anchor has innerHTML</span>';
  dangerouslySetOuterHTML = '<span>anchor has outerHTML</span>';
}
