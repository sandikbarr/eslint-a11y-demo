import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[myCustomAutoFocus]'
})
export class AutoFocusDirective implements AfterViewInit {

  constructor(private readonly el: ElementRef) { }

  ngAfterViewInit() {
    this.el.nativeElement.focus();
  }

}
