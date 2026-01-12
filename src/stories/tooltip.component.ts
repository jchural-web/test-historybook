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
      (mouseenter)="show()"
      (mouseleave)="hide()"
      (focus)="show()"
      (blur)="hide()"
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

  show(): void {
    if (this.disabled) {
      return;
    }
    clearTimeout(this.hideTimeout);
    this.isVisible = true;
    this.cdr.markForCheck();
  }

  hide(): void {
    // Debounce hide to prevent flickering
    this.hideTimeout = setTimeout(() => {
      this.isVisible = false;
      this.cdr.markForCheck();
    }, 0);
  }
}
