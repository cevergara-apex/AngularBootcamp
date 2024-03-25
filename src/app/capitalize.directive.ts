import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[capitalize]'
})
export class CapitalizeDirective {

  constructor(private readonly element: ElementRef<HTMLElement>) { }

  ngOnInit() {
    const originalstring : string = this.element.nativeElement.innerText;
    const capitalizedString : string = originalstring.charAt(0).toUpperCase() + originalstring.slice(1);
    this.element.nativeElement.innerText = capitalizedString;
  }
}