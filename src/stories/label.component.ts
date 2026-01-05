import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export type LabelVariant = 'success' | 'success-light' | 'neutral';
export type LabelIcon = 'none' | 'leading';

@Component({
  selector: 'storybook-label',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [ngClass]="classes">
      <svg
        *ngIf="icon === 'leading'"
        class="label-icon"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 7.33333C12 4.756 9.91066 2.66666 7.33333 2.66666C4.756 2.66666 2.66666 4.756 2.66666 7.33333C2.66666 9.91066 4.756 12 7.33333 12C9.91066 12 12 9.91066 12 7.33333ZM13.3333 7.33333C13.3333 8.74997 12.8412 10.051 12.0202 11.0775L14.4713 13.5286C14.7317 13.789 14.7317 14.211 14.4713 14.4713C14.211 14.7317 13.789 14.7317 13.5286 14.4713L11.0775 12.0202C10.051 12.8412 8.74997 13.3333 7.33333 13.3333C4.01962 13.3333 1.33333 10.647 1.33333 7.33333C1.33333 4.01962 4.01962 1.33333 7.33333 1.33333C10.647 1.33333 13.3333 4.01962 13.3333 7.33333Z"
          [attr.fill]="iconColor"
        />
      </svg>
      <span class="label-text">{{ text }}</span>
    </div>
  `,
  styleUrls: ['./label.css'],
})
export class LabelComponent {
  /** Visual variant of the label */
  @Input() variant: LabelVariant = 'success';

  /** Icon configuration */
  @Input() icon: LabelIcon = 'none';

  /** Label text content */
  @Input() text = 'Etiqueta';

  public get classes(): string[] {
    return ['label', `label-${this.variant}`];
  }

  public get iconColor(): string {
    if (this.variant === 'success') {
      return '#FFF'; // White for solid green background
    }
    return '#166534'; // Green-800 for light variants and neutral
  }
}
