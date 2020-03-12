import { Component, OnInit } from '@angular/core';
import { Slide } from 'src/app/shared/interface/slide';
import { SlidesServiceService } from '../../shared/service/slides-service.service';
import { slides } from '../../shared/slide.data';

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

  constructor(private slideService: SlidesServiceService) {}

  ngOnInit() {
    this.slides = [...slides];
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
