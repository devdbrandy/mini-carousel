import { Component, OnInit, OnDestroy } from '@angular/core';
import { Slide } from './shared/interface/slide';
import { SlidesService } from './shared/services/slides.service';
import { NetworkService } from './shared/services/network.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Mini Carousel';
  slide: Slide;
  onlineStatus: boolean;

  destroy$ = new Subject<boolean>();

  constructor(
    private slideService: SlidesService,
    private networkService: NetworkService
  ) {}

  ngOnInit() {
    this.loadActiveSlide();
    this.networkService.connectionStatus$.subscribe(
      state => (this.onlineStatus = state)
    );
  }

  loadActiveSlide(): void {
    this.slideService.sharedSlide
      .pipe(takeUntil(this.destroy$))
      .subscribe(slide => (this.slide = slide));
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe(); // Unsubscribe from the subject
  }
}
