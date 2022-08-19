import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'label-has-associated-control',
          loadChildren: () =>
            import(
              '@eslint-a11y-demo/angular/label-has-associated-control'
            ).then((module) => module.LabelHasAssociatedControlModule),
        },
        {
          path: 'click-events-have-key-events',
          loadChildren: () =>
            import(
              '@eslint-a11y-demo/angular/click-events-have-key-events'
            ).then((module) => module.ClickEventsHaveKeyEventsModule),
        },
        {
          path: 'mouse-events-have-key-events',
          loadChildren: () =>
            import(
              '@eslint-a11y-demo/angular/mouse-events-have-key-events'
            ).then((module) => module.MouseEventsHaveKeyEventsModule),
        },
        {
          path: 'alt-text',
          loadChildren: () =>
            import('@eslint-a11y-demo/angular/alt-text').then(
              (module) => module.AltTextModule
            ),
        },
        {
          path: 'elements-content',
          loadChildren: () =>
            import('@eslint-a11y-demo/angular/elements-content').then(
              (module) => module.ElementsContentModule
            ),
        },
        {
          path: 'no-positive-tabindex',
          loadChildren: () =>
            import('@eslint-a11y-demo/angular/no-positive-tabindex').then(
              (module) => module.NoPositiveTabindexModule
            ),
        },
        {
          path: 'no-autofocus',
          loadChildren: () =>
            import('@eslint-a11y-demo/angular/no-autofocus').then(
              (module) => module.NoAutofocusModule
            ),
        },
        
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
