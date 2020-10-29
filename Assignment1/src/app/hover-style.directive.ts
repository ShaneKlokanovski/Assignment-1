import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHoverStyle]'
})
export class HoverStyleDirective {

  constructor(private elm: ElementRef, private rend: Renderer2) {
  }

  @HostListener('mouseenter') onMouseEnter(): void{
    this.rend.setStyle(this.elm.nativeElement, 'text-decoration', 'underline');
  }

  @HostListener('mouseleave') onMouseLeave(): void{
    this.rend.setStyle(this.elm.nativeElement, 'text-decoration', null);
  }
}
