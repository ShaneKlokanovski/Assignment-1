import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHoverStyle]'
})
export class HoverStyleDirective {

  @Input() changeTextStyle: string;

  constructor(private elm: ElementRef, private rend: Renderer2) {
  }

  @HostListener('mouseenter') onMouseEnter(): void{
    if (this.changeTextStyle)
    {
      if (this.changeTextStyle === 'textDecoration') {
      this.elm.nativeElement.style.textDecoration = 'underline';
    }
    else if (this.changeTextStyle === 'fontWeight') {
      this.elm.nativeElement.style.fontWeight = 'bold';
    }
    }
  }

  @HostListener('mouseleave') onMouseLeave(): void{
    if (this.changeTextStyle)
    {
      if (this.changeTextStyle === 'textDecoration') {
        this.elm.nativeElement.style.textDecoration = 'none';
      }
      else if (this.changeTextStyle === 'fontWeight') {
        this.elm.nativeElement.style.fontWeight = 'initial';
      }
    }
  }
}
