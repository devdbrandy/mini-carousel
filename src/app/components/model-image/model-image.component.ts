import { Component, OnInit } from '@angular/core';
import { SlidesService } from '../../shared/services/slides.service';

@Component({
  selector: 'app-model-image',
  templateUrl: './model-image.component.html',
  styleUrls: ['./model-image.component.scss'],
})
export class ModelImageComponent implements OnInit {
  image: string;
  loadingImage = false;

  constructor(private slideService: SlidesService) {}

  ngOnInit() {
    this.loadSlideImage();
    this.eagerLoadImages();
  }

  loadSlideImage(): void {
    this.slideService.sharedSlide.subscribe(
      (slide) => (this.image = slide.image)
    );
  }

  eagerLoadImages(): void {
    this.loadingImage = true;
    this.slideService.getSlides().subscribe((slides) => {
      slides.forEach((slide) => {
        new Image().src = slide.image;
      });
    });

    // delay slide image preview for 2secs
    setTimeout(() => {
      this.loadingImage = false;
    }, 2000);
  }
}
