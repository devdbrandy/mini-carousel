import { Component, OnInit } from '@angular/core';
import { SlidesService } from '../../shared/service/slides.service';

@Component({
  selector: 'app-model-image',
  templateUrl: './model-image.component.html',
  styleUrls: ['./model-image.component.scss']
})
export class ModelImageComponent implements OnInit {
  image: string;

  constructor(private slideService: SlidesService) {}

  ngOnInit() {
    this.slideService.sharedSlide.subscribe(
      slide => (this.image = slide.image)
    );

    this.slideService.getSlides().subscribe(slides => {
      slides.forEach(slide => {
        new Image().src = slide.image;
      });
    });
  }
}
