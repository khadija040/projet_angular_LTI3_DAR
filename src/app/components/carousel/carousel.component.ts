import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { SlideComponent } from '../slide/slide.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'carousel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="carousel">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements AfterContentInit {
  @ContentChildren(SlideComponent) slides!: QueryList<SlideComponent>;
  currentIndex = 0;

  ngAfterContentInit() {
    this.showSlide(this.currentIndex);
  }

  showSlide(index: number) {
    this.slides.forEach((slide, i) => {
      slide.isVisible = i === index;
    });
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.showSlide(this.currentIndex);
  }

  previous() {
    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.showSlide(this.currentIndex);
  }
}
