import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type BadgeVariant = 'default' | 'secondary' | 'destructive' | 'outline' | 'success';
export type BadgeSize = 'dot' | 'default' | 'large';
export type BadgeLayout = 'text' | 'text-icon';

@Component({
  selector: 'bsg-badge',
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
      <svg
        *ngIf="layout === 'text-icon'"
        class="badge-icon"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 7.33334C12 4.75601 9.91066 2.66667 7.33334 2.66667C4.75601 2.66667 2.66667 4.75601 2.66667 7.33334C2.66667 9.91066 4.75601 12 7.33334 12C9.91066 12 12 9.91066 12 7.33334ZM13.3333 7.33334C13.3333 8.74998 12.8412 10.051 12.0202 11.0775L14.4714 13.5286C14.7317 13.789 14.7317 14.211 14.4714 14.4714C14.211 14.7317 13.789 14.7317 13.5286 14.4714L11.0775 12.0202C10.051 12.8412 8.74998 13.3333 7.33334 13.3333C4.01963 13.3333 1.33334 10.647 1.33334 7.33334C1.33334 4.01963 4.01963 1.33334 7.33334 1.33334C10.647 1.33334 13.3333 4.01963 13.3333 7.33334Z"
        />
      </svg>
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

  /** Badge layout (text-only or with icon) */
  @Input() layout: BadgeLayout = 'text';

  /** Badge value (for default and large sizes) */
  @Input() value: string | number = '10';

  get badgeClasses(): string[] {
    const classes = [
      `badge-${this.variant}`,
      `badge-size-${this.size}`,
      `badge-layout-${this.layout}`
    ];

    return classes;
  }
}
