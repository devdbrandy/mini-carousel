import { Component, OnInit } from '@angular/core';
import { Slide } from 'src/app/shared/interface/slide';
import { SlidesService } from '../../shared/services/slides.service';

@Component({
  selector: 'app-model-content',
  templateUrl: './model-content.component.html',
  styleUrls: ['./model-content.component.scss'],
})
export class ModelContentComponent implements OnInit {
  title = 'Balinda Christelle';
  role = 'model';
  slides: Slide[];
  currentIndex = 0;
  timer: any;

  constructor(private slideService: SlidesService) {}

  ngOnInit() {
    this.loadSlides();
  }

  loadSlides(): void {
    this.slideService.getSlides().subscribe((slides) => (this.slides = slides));

    this.timer = setInterval(() => {
      this.plusSlides();
    }, 4000);
  }

  showSlide(index) {
    this.currentIndex = index;
    this.slideService.nextSlide(this.activeSlide);
  }

  isActiveSlide(slide): boolean {
    return slide === this.slides[this.currentIndex];
  }

  plusSlides() {
    this.currentIndex += 1;

    if (this.currentIndex >= this.slides.length) {
      this.currentIndex = 0;
    }
    this.showSlide(this.currentIndex);
  }

  pause() {
    clearInterval(this.timer);
  }

  resume() {
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      this.plusSlides();
    }, 4000);
  }

  get activeSlide(): Slide {
    return this.slides[this.currentIndex];
  }
}
