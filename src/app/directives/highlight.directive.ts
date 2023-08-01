import {Directive, ElementRef, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  constructor(private element: ElementRef) {
  }

  ngOnInit() {
    (<HTMLElement>this.element.nativeElement).style.backgroundColor = 'red'
  }
}
