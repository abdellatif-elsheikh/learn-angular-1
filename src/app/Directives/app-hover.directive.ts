import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class AppHoverDirective {
  constructor(private element: ElementRef, private render: Renderer2) {}

  @HostBinding('style.backgroundColor') bgc: string = '#006884';
  @HostBinding('style.border') border: string = '#006873 1px solid';
  @HostBinding('style.color') color: string = '#fff';

  @HostListener('mouseenter') onMouseEnter() {
    this.bgc = '#fff';
    this.color = '#006884'
  }
  @HostListener('mouseout') onMouseOut() {
    this.bgc = '#006884';
    this.color = '#fff'
  }
}
