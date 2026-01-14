import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';

export type TabSize = 'sm' | 'md' | 'lg';
export type TabVariant = 'text' | 'icon-text';
export type TabState = 'default' | 'hover' | 'active' | 'focus' | 'disabled';
export type TabColor = 'blue' | 'green' | 'yellow';

export interface TabItem {
  label: string;
  count?: number;
  icon?: boolean; // Whether to show icon (for icon-text variant)
}

@Component({
  selector: 'bsg-tab-navigation',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="tab-navigation-wrapper" [ngClass]="{ 'tab-navigation-scrollable': scrollable }">
      <!-- Left Chevron -->
      <button
        *ngIf="scrollable && (showLeftChevron || alwaysShowChevrons)"
        type="button"
        class="tab-scroll-btn tab-scroll-btn-left"
        [ngClass]="'tab-scroll-btn-color-' + color"
        [disabled]="isLeftChevronDisabled"
        (click)="scrollLeft()"
        [attr.aria-label]="'Anterior'"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.2929 5.29289C14.6834 4.90237 15.3164 4.90237 15.707 5.29289C16.0975 5.68342 16.0975 6.31643 15.707 6.70696L10.414 11.9999L15.707 17.2929C16.0975 17.6834 16.0975 18.3164 15.707 18.707C15.3164 19.0975 14.6834 19.0975 14.2929 18.707L8.29289 12.707C7.90237 12.3164 7.90237 11.6834 8.29289 11.2929L14.2929 5.29289Z"
            fill="currentColor"
          />
        </svg>
      </button>

      <div #tabContainer class="tab-navigation" [ngClass]="navigationClasses" [attr.role]="'tablist'">
        <button
          *ngFor="let tab of tabs; let i = index"
          type="button"
          class="tab-item"
          [ngClass]="getTabClasses(i)"
          [attr.role]="'tab'"
          [attr.aria-selected]="i === activeIndex"
          [attr.aria-controls]="'tabpanel-' + i"
          [disabled]="state === 'disabled'"
          (click)="handleTabClick(i)"
        >
          <!-- Icon-text variant -->
          <div *ngIf="variant === 'icon-text'" class="tab-icon-content">
            <div class="tab-icon-circle">
              <svg
                class="tab-icon-svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 21V19C19 17.9391 18.5786 16.9217 17.8284 16.1716C17.0783 15.4214 16.0609 15 15 15H9C7.93913 15 6.92172 15.4214 6.17157 16.1716C5.42143 16.9217 5 17.9391 5 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                  [attr.stroke]="getIconStroke(i)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <span class="tab-label">{{ tab.label }}</span>
          </div>

          <!-- Text variant -->
          <span *ngIf="variant === 'text'" class="tab-text-content">
            {{ tab.label }}<span *ngIf="tab.count !== undefined"> ({{ tab.count }})</span>
          </span>
        </button>
      </div>

      <!-- Right Chevron -->
      <button
        *ngIf="scrollable && (showRightChevron || alwaysShowChevrons)"
        type="button"
        class="tab-scroll-btn tab-scroll-btn-right"
        [ngClass]="'tab-scroll-btn-color-' + color"
        [disabled]="isRightChevronDisabled"
        (click)="scrollRight()"
        [attr.aria-label]="'Siguiente'"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.70711 18.7071C9.31658 19.0976 8.68357 19.0976 8.29305 18.7071C7.90252 18.3166 7.90252 17.6836 8.29305 17.293L13.586 12.0001L8.29305 6.70711C7.90252 6.31658 7.90252 5.68357 8.29304 5.29304C8.68357 4.90252 9.31658 4.90252 9.70711 5.29304L15.7071 11.293C16.0976 11.6836 16.0976 12.3166 15.7071 12.7071L9.70711 18.7071Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  `,
  styleUrls: ['./tab-navigation.css'],
})
export class TabNavigationComponent implements AfterViewInit, OnDestroy {
  /** Tab size */
  @Input() size: TabSize = 'md';

  /** Tab variant */
  @Input() variant: TabVariant = 'text';

  /** Tab state */
  @Input() state: TabState = 'default';

  /** Tab color variant */
  @Input() color: TabColor = 'blue';

  /** List of tabs */
  @Input() tabs: TabItem[] = [
    { label: 'Solicitudes Realizadas', count: 3 },
    { label: 'Información del cliente' },
  ];

  /** Active tab index */
  @Input() set activeIndex(value: number) {
    this._activeIndex = value;
  }
  get activeIndex(): number {
    return this._activeIndex;
  }
  private _activeIndex: number = 0;

  /** Enable scrollable tabs with chevron navigation */
  @Input() scrollable: boolean = false;

  /** Always show chevrons, even when not needed (enables disabled state) */
  @Input() alwaysShowChevrons: boolean = false;

  /** Tab change event emitter */
  @Output() onTabChange = new EventEmitter<number>();

  @ViewChild('tabContainer') tabContainer?: ElementRef<HTMLDivElement>;

  showLeftChevron: boolean = false;
  showRightChevron: boolean = false;
  isLeftChevronDisabled: boolean = false;
  isRightChevronDisabled: boolean = false;
  private resizeObserver?: ResizeObserver;
  private tabElements: HTMLElement[] = [];

  get navigationClasses(): string[] {
    return [
      `tab-navigation-${this.size}`,
      `tab-navigation-${this.variant}`,
      `tab-navigation-state-${this.state}`,
      `tab-navigation-color-${this.color}`,
    ];
  }

  getTabClasses(index: number): string[] {
    const classes = [
      `tab-item-${this.size}`,
      `tab-item-${this.variant}`,
      `tab-item-color-${this.color}`,
    ];

    if (index === this._activeIndex) {
      classes.push('tab-item-active');
    } else {
      classes.push(`tab-item-${this.state}`);
    }

    return classes;
  }

  getIconStroke(index: number): string {
    if (index === this._activeIndex) {
      return 'white';
    }
    // Return color-specific stroke values
    const strokeMap: Record<TabColor, string> = {
      blue: '#2563EB', // Blue-600
      green: '#16A34A', // Green-600
      yellow: '#CA8A04', // Yellow-600
    };
    return strokeMap[this.color];
  }

  handleTabClick(index: number): void {
    if (this.state !== 'disabled' && index !== this._activeIndex) {
      this._activeIndex = index;
      this.onTabChange.emit(index);
    }
  }

  ngAfterViewInit(): void {
    if (this.scrollable && this.tabContainer) {
      // Collect tab elements for snap calculation
      this.collectTabElements();

      // Initial overflow check
      setTimeout(() => this.updateChevronVisibility(), 0);

      // Listen to scroll events to update chevron visibility
      this.tabContainer.nativeElement.addEventListener('scroll', () => {
        this.updateChevronVisibility();
      });

      // Use ResizeObserver to detect when container or content size changes
      this.resizeObserver = new ResizeObserver(() => {
        this.collectTabElements();
        this.updateChevronVisibility();
      });
      this.resizeObserver.observe(this.tabContainer.nativeElement);
    }
  }

  ngOnDestroy(): void {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }

  private collectTabElements(): void {
    if (!this.tabContainer) return;
    this.tabElements = Array.from(
      this.tabContainer.nativeElement.querySelectorAll('.tab-item')
    );
  }

  private updateChevronVisibility(): void {
    if (!this.tabContainer) return;

    const container = this.tabContainer.nativeElement;
    const hasOverflow = container.scrollWidth > container.clientWidth;

    if (!hasOverflow) {
      this.showLeftChevron = false;
      this.showRightChevron = false;
      this.isLeftChevronDisabled = true;
      this.isRightChevronDisabled = true;
      return;
    }

    // Determine disabled state based on scroll position
    this.isLeftChevronDisabled = container.scrollLeft <= 1;
    const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 1;
    this.isRightChevronDisabled = isAtEnd;

    // For alwaysShowChevrons mode, always show them
    if (this.alwaysShowChevrons) {
      this.showLeftChevron = true;
      this.showRightChevron = true;
    } else {
      // Original behavior: hide when not needed
      this.showLeftChevron = !this.isLeftChevronDisabled;
      this.showRightChevron = !this.isRightChevronDisabled;
    }
  }

  private getFixedScrollAmount(): number {
    if (!this.tabContainer) {
      return 0;
    }

    const container = this.tabContainer.nativeElement;
    // Use 80% of viewport width as the fixed scroll distance
    return container.clientWidth * 0.8;
  }

  private constrainScrollPosition(newScrollLeft: number): number {
    if (!this.tabContainer) {
      return 0;
    }

    const container = this.tabContainer.nativeElement;
    const maxScroll = container.scrollWidth - container.clientWidth;

    // Clamp scroll position between 0 and max
    return Math.max(0, Math.min(newScrollLeft, maxScroll));
  }

  scrollLeft(): void {
    if (!this.tabContainer || this.isLeftChevronDisabled) return;

    const container = this.tabContainer.nativeElement;
    const scrollAmount = this.getFixedScrollAmount();

    // Calculate new position by moving left the same fixed amount
    const newScrollLeft = container.scrollLeft - scrollAmount;
    const constrainedPosition = this.constrainScrollPosition(newScrollLeft);

    container.scrollBy({
      left: constrainedPosition - container.scrollLeft,
      behavior: 'smooth',
    });
  }

  scrollRight(): void {
    if (!this.tabContainer || this.isRightChevronDisabled) return;

    const container = this.tabContainer.nativeElement;
    const scrollAmount = this.getFixedScrollAmount();

    // Calculate new position by moving right the same fixed amount
    const newScrollLeft = container.scrollLeft + scrollAmount;
    const constrainedPosition = this.constrainScrollPosition(newScrollLeft);

    container.scrollBy({
      left: constrainedPosition - container.scrollLeft,
      behavior: 'smooth',
    });
  }
}
