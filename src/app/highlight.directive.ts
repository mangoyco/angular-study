import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { HeroesService } from './heroes.service';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') highlightColor: string
  


  constructor(private el: ElementRef,
    private heroesService :HeroesService
  ) { 
    // el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseenter') onMouseEnter() {
    console.log(this.heroesService.bol)
    // this.highlight('yellow');
    this.highlight(this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
  
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
