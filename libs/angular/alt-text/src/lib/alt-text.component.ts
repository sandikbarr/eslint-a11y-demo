import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'eslint-a11y-demo-alt-text',
  template: `
    <section>
      <!-- img has alt text -->
      <img width="50" src="/assets/foo.gif" alt="foo bar baz standing in an empty blue room">
    <section>
      
    <section>
      <!-- decorative img has empty alt text -->
      <a href="#"><img width="50" src="/assets/foo.gif" alt="">Foo Bar Baz</a>
    </section>

    <section>
      <!-- also supports input area, object, and type="image" -->
      <area/>
      <area alt="foo"/>
      <area aria-label="foo"/>
      <area aria-labelledby="foo-id"/>
      <area title="foo"/>

      <object alt="foo"></object>
      <object aria-label="foo"></object>
      <object aria-labelledby="foo-id"></object>
      <object title="foo"></object>

      <input type="image" src="/assets/foo.gif" alt="foo">
    </section>
  `,
  styleUrls: ['./alt-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AltTextComponent {}
