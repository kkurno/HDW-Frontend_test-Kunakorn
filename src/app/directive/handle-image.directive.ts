import { Directive, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHandleImage]',
})
export class HandleImageDirective {
  private defaultSrc = '../../assets/image_notfound.png';

  @Input() @HostBinding() src: string;

  @HostListener('error') changeUrl() {
    this.src = this.defaultSrc;
  }
}
