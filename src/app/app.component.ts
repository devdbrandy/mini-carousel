import { Component, OnInit } from '@angular/core';
import { Slide } from './shared/interface/slide';
import { SlidesService } from './shared/service/slides.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Mini Carousel';
  slide: Slide;

  constructor(private slideService: SlidesService) {}

  ngOnInit() {
    this.loadActiveSlide();
  }

  loadActiveSlide(): void {
    this.slideService.sharedSlide.subscribe(slide => (this.slide = slide));
  }
}
