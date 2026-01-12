import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  HostListener,
  OnInit,
  ContentChild,
  AfterContentInit,
  ChangeDetectorRef,
  ChangeDetectionStrategy
} from '@angular/core';
import { CommonModule } from '@angular/common';

export type TooltipPlacement = 'top' | 'right' | 'bottom' | 'left';

@Component({
  selector: 'bsg-tooltip',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="tooltip-trigger"
      (mouseenter)="onMouseEnter()"
      (mouseleave)="onMouseLeave()"
      (focus)="onFocus()"
      (blur)="onBlur()"
      (mousedown)="onMouseDown()"
      tabindex="0"
      [attr.aria-describedby]="tooltipId"
      #triggerElement>
      <ng-content></ng-content>
    </div>

    <!-- Tooltip overlay -->
    <div
      *ngIf="isVisible && !disabled"
      class="tooltip-overlay"
      [class]="'tooltip-' + placement"
      [attr.id]="tooltipId"
      role="tooltip"
      #tooltipElement>
      <div class="tooltip-content">
        {{ content }}
      </div>
      <div class="tooltip-arrow"></div>
    </div>
  `,
  styleUrls: ['./tooltip.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipComponent implements OnInit, AfterContentInit {
  @Input() content: string = '';
  @Input() placement: TooltipPlacement = 'top';
  @Input() disabled: boolean = false;

  @ViewChild('triggerElement') triggerElement!: ElementRef;
  @ViewChild('tooltipElement') tooltipElement!: ElementRef;

  isVisible: boolean = false;
  tooltipId: string = '';

  private hideTimeout: any;
  private justClicked: boolean = false;
  private isMouseHovering: boolean = false;

  constructor(
    private elementRef: ElementRef,
    private cdr: ChangeDetectorRef
  ) {
    this.tooltipId = `tooltip-${Math.random().toString(36).substr(2, 9)}`;
  }

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    // Ensure trigger is focusable
    if (this.triggerElement) {
      const el = this.triggerElement.nativeElement;
      if (!el.getAttribute('tabindex')) {
        el.setAttribute('tabindex', '0');
      }
    }
  }

  /**
   * Handle mouse enter: show tooltip
   * Activation by hover is always allowed
   */
  onMouseEnter(): void {
    this.isMouseHovering = true;
    this.show();
  }

  /**
   * Handle mouse leave: hide tooltip
   */
  onMouseLeave(): void {
    this.isMouseHovering = false;
    this.hide();
  }

  /**
   * Handle focus: show tooltip only if triggered by keyboard, not by click
   * If the focus is due to a click (justClicked is true), we skip showing
   * because the tooltip may already be visible from mouseenter
   */
  onFocus(): void {
    if (this.justClicked) {
      // Click-triggered focus: ignore to prevent unwanted tooltip activation
      this.justClicked = false;
      return;
    }
    // Keyboard-triggered focus: show tooltip
    this.show();
  }

  /**
   * Handle blur: hide tooltip
   */
  onBlur(): void {
    this.isMouseHovering = false;
    this.justClicked = false;
    this.hide();
  }

  /**
   * Track mouse down to detect click-triggered focus
   */
  onMouseDown(): void {
    this.justClicked = true;
    // Clear the flag after a brief delay to handle async focus events
    setTimeout(() => {
      this.justClicked = false;
    }, 0);
  }

  private show(): void {
    if (this.disabled) {
      return;
    }
    clearTimeout(this.hideTimeout);
    this.isVisible = true;
    this.cdr.markForCheck();
  }

  private hide(): void {
    // Debounce hide to prevent flickering
    this.hideTimeout = setTimeout(() => {
      this.isVisible = false;
      this.cdr.markForCheck();
    }, 0);
  }
}
