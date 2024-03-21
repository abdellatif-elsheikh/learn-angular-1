import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[SetBackground]',
})
export class SetBackgroundDirective implements OnInit {
  constructor(private element: ElementRef, private render: Renderer2) {}

  nElement = this.element.nativeElement;
  ngOnInit() {
    // this.element.nativeElement.style.backgroundColor = '#36454F';
    // this.element.nativeElement.style.color = '#fff';
    this.render.setStyle(this.nElement, 'backgroundColor', '#36454F');
    this.render.setStyle(this.nElement, 'color', '#fff');
  }
}
