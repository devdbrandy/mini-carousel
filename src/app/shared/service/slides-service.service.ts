import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { slides } from '../slide.data';
import { Slide } from '../interface/slide';

@Injectable({
  providedIn: 'root'
})
export class SlidesServiceService {
  private slide = new BehaviorSubject<Slide>(slides[0]);
  sharedSlide = this.slide.asObservable();

  constructor() {}

  nextSlide(slide) {
    this.slide.next(slide);
  }
}
