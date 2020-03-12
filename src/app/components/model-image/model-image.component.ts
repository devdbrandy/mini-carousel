import { Component, OnInit } from '@angular/core';
import { SlidesServiceService } from '../../shared/service/slides-service.service';
// import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-model-image',
  templateUrl: './model-image.component.html',
  styleUrls: ['./model-image.component.scss']
})
export class ModelImageComponent implements OnInit {
  image: string;

  constructor(private slideService: SlidesServiceService) {}

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
