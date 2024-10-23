import { Directive, ElementRef, inject, Inject, Input } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
})
export class SafeLinkDirective {
  // @Inject({ SafeLinkDirective }) hostElemenref: ElementRef<HTMLAnchorElement> = ;
  private hostElemRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);
  @Input({ required: true, alias: 'appSafeLink' }) queryParam: string = 'myApp';
  constructor() {}

  onConfirmLeavePage(event: MouseEvent) {
    event.preventDefault();
    const wantsToLeave = window.confirm('Do you want to leave the app?');
    if (wantsToLeave) {
      const address = this.hostElemRef.nativeElement.href;
      this.hostElemRef.nativeElement.href =
        address + '?from=' + this.queryParam;
    }
  }
}
