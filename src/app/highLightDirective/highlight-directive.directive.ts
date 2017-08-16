import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlightDirective]'
})
export class HighlightDirectiveDirective {
  @HostListener('mouseenter') onmouseenter() {
    this.hightlight('red');
  }

  @HostListener('mouseleave') onmouseleave() {
    this.hightlight(null);
  }

  private hightlight (color:string) {
    this.ele.nativeElement.style.backgroundColor = color;
  }

  constructor(private ele: ElementRef) {
    //ele.nativeElement.style.backgroundColor = 'red';
  }

}
