import { Component, OnInit } from '@angular/core';
import { Slide } from 'src/app/shared/interface/slide';
import { SlidesService } from '../../shared/service/slides.service';

@Component({
  selector: 'app-model-content',
  templateUrl: './model-content.component.html',
  styleUrls: ['./model-content.component.scss']
})
export class ModelContentComponent implements OnInit {
  title = 'Balinda Christelle';
  role = 'model';
  slides: Slide[];
  currentIndex = 0;

  constructor(private slideService: SlidesService) {}

  ngOnInit() {
    this.slideService
      .getSlides()
      .subscribe(slideData => (this.slides = slideData));
  }

  showSlide(index) {
    this.currentIndex = index;
    this.slideService.nextSlide(this.activeSlide);
  }

  isActiveSlide(slide) {
    return slide === this.slides[this.currentIndex];
  }

  get activeSlide(): Slide {
    return this.slides[this.currentIndex];
  }
}
