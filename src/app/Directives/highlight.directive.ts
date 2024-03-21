import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private element: ElementRef, private render: Renderer2) {}

  private el = this.element.nativeElement;
  @HostListener('mouseenter') onMouseEnter() {
    this.render.addClass(this.el, 'highlight-product');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.render.removeClass(this.el, 'highlight-product');
  }
}
