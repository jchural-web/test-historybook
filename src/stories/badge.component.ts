import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type BadgeVariant = 'default' | 'secondary' | 'destructive' | 'outline' | 'success';
export type BadgeSize = 'dot' | 'default' | 'large';

@Component({
  selector: 'storybook-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span
      *ngIf="size === 'dot'"
      class="badge badge-dot"
      [ngClass]="badgeClasses"
      [attr.role]="'status'"
      [attr.aria-label]="'Badge indicator'"
    ></span>

    <span
      *ngIf="size !== 'dot'"
      class="badge badge-text"
      [ngClass]="badgeClasses"
      [attr.role]="'status'"
      [attr.aria-label]="value"
    >
      {{ value }}
    </span>
  `,
  styleUrls: ['./badge.css'],
})
export class BadgeComponent {
  /** Badge variant */
  @Input() variant: BadgeVariant = 'default';

  /** Badge size */
  @Input() size: BadgeSize = 'default';

  /** Badge value (for default and large sizes) */
  @Input() value: string | number = '10';

  get badgeClasses(): string[] {
    const classes = [
      `badge-${this.variant}`,
      `badge-size-${this.size}`
    ];
    
    return classes;
  }
}
