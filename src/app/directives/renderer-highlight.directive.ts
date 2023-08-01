import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appRendererHighlight]'
})
export class RendererHighlightDirective implements OnInit {
  @Input() defaultColor: string = '#723586'
  @Input() highlightColor: string = '#9946af'

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  @HostBinding('style.backgroundColor') color!: string

  ngOnInit() {
  }

  @HostListener('mouseenter') onmouseover(event: Event) {
    this.color = this.highlightColor
  }

  @HostListener('mouseleave') onmouseleave(event: Event) {
    this.color = this.defaultColor
  }

  @HostListener('click') onclick(event: Event) {
    this.color = 'pink'
  }
}
