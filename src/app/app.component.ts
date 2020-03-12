import { Component, OnInit } from '@angular/core';
import { Slide } from './shared/interface/slide';
import { SlidesServiceService } from './shared/service/slides-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Mini Carousel';
  slide: Slide;

  constructor(private slideService: SlidesServiceService) {}

  ngOnInit() {
    this.slideService.sharedSlide.subscribe(slide => (this.slide = slide));
  }
}
