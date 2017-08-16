import { Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[highlightDirective]'
})
export class HighlightDirectiveDirective {
  @Input('highlightDirective') highlightColor:string;

  @HostListener('mouseenter') onmouseenter() {
    this.hightlight(this.highlightColor);
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
