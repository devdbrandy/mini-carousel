import { Injectable } from '@angular/core';
import { BehaviorSubject, of, Observable } from 'rxjs';
import { slides } from '../slide.data';
import { Slide } from '../interface/slide';

@Injectable({
  providedIn: 'root'
})
export class SlidesServiceService {
  private slide = new BehaviorSubject<Slide>(slides[0]);
  sharedSlide = this.slide.asObservable();

  constructor() {}

  getSlides(): Observable<Slide[]> {
    return of(slides);
  }

  nextSlide(slide) {
    this.slide.next(slide);
  }
}
