import { ElementRef, HostListener, Input,Renderer2 } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  // constructor() { }
  // private _defaulColor = 'red';  
  // @Input('appHighlight') highlightColor: string;  

  // constructor(private el: ElementRef, private render: Renderer2) {  
  // }  

  // @HostListener('mouseenter') onMouseEnter() {  
  //     console.log(this.highlightColor);  
  //     this.changecolor(this.highlightColor || this._defaulColor);  
  // }  

  // @HostListener('mouseleave') onMouseLeave() {  
  //     console.log(this.highlightColor);  
  //     this.changecolor(null);  
  // }  

  // private changecolor(color: string) {  
  //     // this.render.setElementStyle(this.el.nativeElement, 'color', color);
  //     this.render.setStyle(this.el.nativeElement, 'color', color);  
  // }  

  constructor(private el: ElementRef) { }

  @Input() defaultColor: string;

  @Input('appHighlight') highlightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'blue');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
