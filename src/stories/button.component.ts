import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonVariant = 'default' | 'secondary' | 'outline' | 'ghost' | 'link' | 'destructive';
export type ButtonState = 'default' | 'hover' | 'active' | 'focus' | 'disabled';
export type ButtonShape = 'rectangular' | 'pill' | 'icon' | 'icon-text';

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
    >
      <svg
        *ngIf="icon && iconPosition === 'left'"
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
      <span *ngIf="shape !== 'icon'" class="button-label">{{ label }}</span>
      <svg
        *ngIf="icon && iconPosition === 'right'"
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

  public handleClick(event: Event): void {
    if (this.state !== 'disabled' && !this.disabled) {
      this.onClick.emit(event);
    }
  }
}
