import { Component, Input, ContentChildren, QueryList, AfterContentInit, OnChanges, SimpleChanges, ChangeDetectorRef, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bsg-carousel-item',
  standalone: true,
  template: '<ng-content></ng-content>',
  styles: [`
    :host {
      display: block;
      flex: 0 0 calc((100% - (var(--carousel-items-per-view, 2) - 1) * var(--carousel-gap, 30px)) / var(--carousel-items-per-view, 2));
      min-width: 0;
      box-sizing: border-box;
    }
  `]
})
export class CarouselItemComponent {
  constructor(public elementRef: ElementRef) {}
}

@Component({
  selector: 'bsg-carousel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="carousel-root">
      <!-- Previous Button (outside viewport) -->
      <button 
        *ngIf="showArrows"
        class="carousel-arrow carousel-arrow-prev"
        (click)="previous()"
        [disabled]="!loop && currentIndex === 0"
        aria-label="Previous slide"
        type="button">
        <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20.5" cy="20.5" r="20" fill="white" stroke="#E2E8F0"/>
        </svg>
        <svg class="chevron-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.293 5.29295C14.6835 4.90243 15.3165 4.90243 15.707 5.29295C16.0976 5.68348 16.0976 6.31649 15.707 6.70702L10.4141 12L15.707 17.293C16.0976 17.6835 16.0976 18.3165 15.707 18.707C15.3165 19.0975 14.6835 19.0975 14.293 18.707L8.29297 12.707C7.90245 12.3165 7.90245 11.6835 8.29297 11.293L14.293 5.29295Z" fill="#9333EA"/>
        </svg>
      </button>

      <!-- Viewport (only contains items, overflow hidden) -->
      <div class="carousel-viewport" #viewportElement>
        <div 
          class="carousel-track"
          [style.transform]="translateX"
          [style.transition]="'transform 0.3s ease-in-out'">
          <ng-content></ng-content>
        </div>
      </div>

      <!-- Next Button (outside viewport) -->
      <button 
        *ngIf="showArrows"
        class="carousel-arrow carousel-arrow-next"
        (click)="next()"
        [disabled]="!loop && currentIndex >= maxIndex"
        aria-label="Next slide"
        type="button">
        <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20.5" cy="20.5" r="20" transform="rotate(180 20.5 20.5)" fill="white" stroke="#E2E8F0"/>
        </svg>
        <svg class="chevron-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.70699 18.707C9.31646 19.0976 8.68345 19.0976 8.29292 18.707C7.9024 18.3165 7.9024 17.6835 8.29292 17.293L13.5859 12L8.29292 6.70705C7.9024 6.31652 7.9024 5.68351 8.29292 5.29298C8.68345 4.90246 9.31646 4.90246 9.70699 5.29298L15.707 11.293C16.0975 11.6835 16.0975 12.3165 15.707 12.707L9.70699 18.707Z" fill="#9333EA"/>
        </svg>
      </button>
    </div>

    <!-- Indicators (outside root, bottom-centered) -->
    <div *ngIf="showIndicators" class="carousel-indicators">
      <button
        *ngFor="let page of pages; let i = index"
        class="carousel-indicator"
        [class.active]="i === currentIndex"
        (click)="goToSlide(i)"
        [attr.aria-label]="'Go to slide ' + (i + 1)"
        type="button">
      </button>
    </div>
  `,
  styleUrls: ['./carousel.css']
})
export class CarouselComponent implements AfterContentInit, OnChanges {
  /** Number of items visible at once */
  @Input() itemsPerView: number = 2;

  /** Show navigation arrows */
  @Input() showArrows: boolean = true;

  /** Show pagination indicators */
  @Input() showIndicators: boolean = true;

  /** Enable infinite loop */
  @Input() loop: boolean = false;

  @ContentChildren(CarouselItemComponent) items!: QueryList<CarouselItemComponent>;
  @ViewChild('viewportElement') viewportElement!: ElementRef;

  currentIndex: number = 0;
  totalItems: number = 0;
  pages: number[] = [];
  private gap: number = 30; // Default desktop gap

  constructor(private cdr: ChangeDetectorRef, private elementRef: ElementRef) {}

  ngAfterContentInit(): void {
    this.totalItems = this.items.length;
    this.calculatePages();
    this.updateGapFromViewport();
    this.setCSSVariables();
    this.cdr.detectChanges();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['itemsPerView']) {
      this.calculatePages();
      this.setCSSVariables();
    }
  }

  /**
   * Detect the gap value from the viewport's computed gap
   * Falls back to desktop default if detection fails
   */
  private updateGapFromViewport(): void {
    if (!this.viewportElement?.nativeElement) {
      return;
    }

    const track = this.viewportElement.nativeElement.querySelector('.carousel-track');
    if (track) {
      const computedGap = window.getComputedStyle(track).gap;
      const gapValue = parseFloat(computedGap);
      if (!isNaN(gapValue)) {
        this.gap = gapValue;
      }
    }
  }

  private setCSSVariables(): void {
    // Set on the component's root element so all descendants inherit
    const rootElement = this.elementRef.nativeElement;
    if (rootElement) {
      rootElement.style.setProperty('--carousel-items-per-view', `${this.itemsPerView}`);
      rootElement.style.setProperty('--carousel-gap', `${this.gap}px`);
    }
  }

  calculatePages(): void {
    const pageCount = Math.ceil(this.totalItems / this.itemsPerView);
    this.pages = Array.from({ length: pageCount }, (_, i) => i);
  }

  get maxIndex(): number {
    return Math.max(0, this.pages.length - 1);
  }

  /**
   * Deterministic translateX calculation in pixels
   * step = itemWidth + gap
   * translateX = -currentIndex * step
   *
   * Ensures no drift: the position is calculated from zero each time,
   * not accumulated.
   */
  get translateX(): string {
    if (!this.viewportElement?.nativeElement) {
      return 'translateX(0)';
    }

    const viewport = this.viewportElement.nativeElement;
    const track = viewport.querySelector('.carousel-track');

    if (!track || this.totalItems === 0) {
      return 'translateX(0)';
    }

    // Get the first item to measure its width
    const firstItem = track.children[0];
    if (!firstItem) {
      return 'translateX(0)';
    }

    // Get computed dimensions
    const itemWidth = firstItem.offsetWidth;
    const step = itemWidth + this.gap;

    // Deterministic: calculate position from zero
    const offset = -this.currentIndex * step;

    return `translateX(${offset}px)`;
  }

  next(): void {
    if (this.currentIndex < this.maxIndex) {
      this.currentIndex++;
    } else if (this.loop) {
      this.currentIndex = 0;
    }
    this.cdr.detectChanges();
  }

  previous(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else if (this.loop) {
      this.currentIndex = this.maxIndex;
    }
    this.cdr.detectChanges();
  }

  goToSlide(index: number): void {
    if (index >= 0 && index <= this.maxIndex) {
      this.currentIndex = index;
      this.cdr.detectChanges();
    }
  }
}
