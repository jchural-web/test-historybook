import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonVariant = 'default' | 'secondary' | 'outline' | 'ghost' | 'link' | 'destructive';
export type ButtonState = 'default' | 'hover' | 'active' | 'focus' | 'disabled';
export type ButtonShape = 'rectangular' | 'pill' | 'icon' | 'icon-text' | 'icon-only';
export type IconName = 'check' | 'chevron-left' | 'chevron-right' | 'chevron-up' | 'chevron-down' | 'none';

// Icon definitions for icon-only buttons
const icons: Record<string, string> = {
  'chevron-left': `<svg width="100%" height="100%" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.64776 3.57275C9.91136 3.30915 10.3386 3.30915 10.6023 3.57275C10.8659 3.83636 10.8659 4.26364 10.6023 4.52724L7.0295 8.1L10.6023 11.6728C10.8659 11.9364 10.8659 12.3636 10.6023 12.6272C10.3386 12.8908 9.91136 12.8908 9.64776 12.6272L5.59776 8.57724C5.33415 8.31364 5.33415 7.88636 5.59776 7.62275L9.64776 3.57275Z" fill="currentColor"/>
</svg>`,
  'chevron-right': `<svg width="100%" height="100%" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.35224 3.57275C6.08864 3.30915 5.66136 3.30915 5.39776 3.57275C5.13415 3.83636 5.13415 4.26364 5.39776 4.52724L8.9705 8.1L5.39776 11.6728C5.13415 11.9364 5.13415 12.3636 5.39776 12.6272C5.66136 12.8908 6.08864 12.8908 6.35224 12.6272L10.4022 8.57724C10.6659 8.31364 10.6659 7.88636 10.4022 7.62275L6.35224 3.57275Z" fill="currentColor"/>
</svg>`,
  'chevron-up': `<svg width="100%" height="100%" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.57275 9.64776C3.30915 9.91136 3.30915 10.3386 3.57275 10.6023C3.83636 10.8659 4.26364 10.8659 4.52724 10.6023L8.1 7.0295L11.6728 10.6023C11.9364 10.8659 12.3636 10.8659 12.6272 10.6023C12.8908 10.3386 12.8908 9.91136 12.6272 9.64776L8.57724 5.59776C8.31364 5.33415 7.88636 5.33415 7.62275 5.59776L3.57275 9.64776Z" fill="currentColor"/>
</svg>`,
  'chevron-down': `<svg width="100%" height="100%" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.57275 6.35224C3.30915 6.08864 3.30915 5.66136 3.57275 5.39776C3.83636 5.13415 4.26364 5.13415 4.52724 5.39776L8.1 8.9705L11.6728 5.39776C11.9364 5.13415 12.3636 5.13415 12.6272 5.39776C12.8908 5.66136 12.8908 6.08864 12.6272 6.35224L8.57724 10.4022C8.31364 10.6659 7.88636 10.6659 7.62275 10.4022L3.57275 6.35224Z" fill="currentColor"/>
</svg>`,
  'check': `<svg width="100%" height="100%" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor"/>
</svg>`,
  'none': ''
};

@Component({
  selector: 'storybook-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      type="button"
      (click)="handleClick($event)"
      [ngClass]="classes"
      [disabled]="state === 'disabled' || disabled"
      [attr.aria-disabled]="state === 'disabled' || disabled"
      [attr.aria-label]="shape === 'icon-only' ? (label || 'Icon button') : null"
    >
      <!-- Icon-only button: centered icon using DomSanitizer -->
      <span
        *ngIf="shape === 'icon-only'"
        class="button-icon-only"
        [innerHTML]="getIconSvg(iconName)"
      ></span>

      <!-- Regular buttons with optional icons -->
      <svg
        *ngIf="shape !== 'icon-only' && icon && iconPosition === 'left'"
        class="button-icon button-icon-left"
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.43152 0.706459C7.98489 0.461733 9.57507 0.757369 10.9371 1.54325C11.236 1.71571 11.3389 2.09758 11.1666 2.39652C10.9941 2.6955 10.6117 2.79791 10.3127 2.6254C9.19838 1.98244 7.8971 1.74102 6.62622 1.9412C5.35531 2.14143 4.19123 2.77142 3.32849 3.72587C2.46577 4.68036 1.95621 5.90193 1.88501 7.18656C1.81383 8.47123 2.18524 9.74182 2.93726 10.7858C3.68927 11.8297 4.7767 12.5845 6.0177 12.9239C7.2587 13.2632 8.57874 13.167 9.75733 12.651C10.936 12.1351 11.9022 11.2303 12.4948 10.0882C13.0872 8.94613 13.2698 7.63546 13.0129 6.37479C12.944 6.03664 13.1625 5.7065 13.5006 5.63749C13.8388 5.56857 14.169 5.78696 14.2379 6.12516C14.5519 7.66605 14.3279 9.26786 13.6038 10.6637C12.8796 12.0596 11.699 13.1654 10.2584 13.7961C8.81797 14.4266 7.20484 14.5441 5.68811 14.1293C4.17129 13.7145 2.84198 12.7923 1.92285 11.5164C1.00374 10.2404 0.549867 8.68771 0.636842 7.11759C0.723839 5.54744 1.3469 4.05449 2.40137 2.88786C3.45582 1.7213 4.87818 0.951184 6.43152 0.706459ZM13.3084 2.05778C13.5524 1.81398 13.9482 1.81382 14.1921 2.05778C14.4362 2.30186 14.4362 2.6981 14.1921 2.94218L7.94214 9.19218C7.69815 9.43613 7.30244 9.43597 7.05835 9.19218L5.18335 7.31718C4.93927 7.0731 4.93927 6.67686 5.18335 6.43278C5.42744 6.18898 5.82315 6.18882 6.06714 6.43278L7.50025 7.86588L13.3084 2.05778Z"
          [attr.fill]="iconColor"
        />
      </svg>
      <span *ngIf="shape !== 'icon' && shape !== 'icon-only'" class="button-label">{{ label }}</span>
      <svg
        *ngIf="shape !== 'icon-only' && icon && iconPosition === 'right'"
        class="button-icon button-icon-right"
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.43152 0.706459C7.98489 0.461733 9.57507 0.757369 10.9371 1.54325C11.236 1.71571 11.3389 2.09758 11.1666 2.39652C10.9941 2.6955 10.6117 2.79791 10.3127 2.6254C9.19838 1.98244 7.8971 1.74102 6.62622 1.9412C5.35531 2.14143 4.19123 2.77142 3.32849 3.72587C2.46577 4.68036 1.95621 5.90193 1.88501 7.18656C1.81383 8.47123 2.18524 9.74182 2.93726 10.7858C3.68927 11.8297 4.7767 12.5845 6.0177 12.9239C7.2587 13.2632 8.57874 13.167 9.75733 12.651C10.936 12.1351 11.9022 11.2303 12.4948 10.0882C13.0872 8.94613 13.2698 7.63546 13.0129 6.37479C12.944 6.03664 13.1625 5.7065 13.5006 5.63749C13.8388 5.56857 14.169 5.78696 14.2379 6.12516C14.5519 7.66605 14.3279 9.26786 13.6038 10.6637C12.8796 12.0596 11.699 13.1654 10.2584 13.7961C8.81797 14.4266 7.20484 14.5441 5.68811 14.1293C4.17129 13.7145 2.84198 12.7923 1.92285 11.5164C1.00374 10.2404 0.549867 8.68771 0.636842 7.11759C0.723839 5.54744 1.3469 4.05449 2.40137 2.88786C3.45582 1.7213 4.87818 0.951184 6.43152 0.706459ZM13.3084 2.05778C13.5524 1.81398 13.9482 1.81382 14.1921 2.05778C14.4362 2.30186 14.4362 2.6981 14.1921 2.94218L7.94214 9.19218C7.69815 9.43613 7.30244 9.43597 7.05835 9.19218L5.18335 7.31718C4.93927 7.0731 4.93927 6.67686 5.18335 6.43278C5.42744 6.18898 5.82315 6.18882 6.06714 6.43278L7.50025 7.86588L13.3084 2.05778Z"
          [attr.fill]="iconColor"
        />
      </svg>
    </button>
  `,
  styleUrls: ['./button.css'],
})
export class ButtonComponent {
  constructor(private sanitizer: DomSanitizer) {}
  /** Size of the button */
  @Input() size: ButtonSize = 'md';

  /** Visual variant of the button */
  @Input() variant: ButtonVariant = 'default';

  /** Current state of the button */
  @Input() state: ButtonState = 'default';

  /** Shape of the button */
  @Input() shape: ButtonShape = 'rectangular';

  /** Button label text */
  @Input() label = 'Boton';

  /** Show icon */
  @Input() icon = false;

  /** Icon position (left or right) */
  @Input() iconPosition: 'left' | 'right' = 'left';

  /** Icon name for icon-only buttons */
  @Input() iconName: IconName = 'chevron-left';

  /** Disabled state (alternative to using state='disabled') */
  @Input() disabled = false;

  /** Click event emitter */
  @Output() onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const classes = [
      'btn',
      `btn-${this.size}`,
      `btn-${this.variant}`,
      `btn-state-${this.state}`,
      `btn-shape-${this.shape}`,
    ];

    if (this.icon) {
      classes.push('btn-with-icon');
    }

    return classes;
  }

  public get iconColor(): string {
    if (this.variant === 'outline') return '#7C3AED';
    if (this.variant === 'ghost') return '#1E293B';
    if (this.variant === 'link') return '#2563EB';
    return 'white';
  }

  getIconSvg(iconName: string): SafeHtml {
    const svg = icons[iconName] || icons['none'];
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  public handleClick(event: Event): void {
    if (this.state !== 'disabled' && !this.disabled) {
      this.onClick.emit(event);
    }
  }
}
