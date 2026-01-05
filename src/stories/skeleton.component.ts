import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type SkeletonType = 'text' | 'circular' | 'rectangular';

@Component({
  selector: 'storybook-skeleton',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="skeleton"
      [ngClass]="skeletonClasses"
      [style.width]="computedWidth"
      [style.height]="computedHeight"
      [attr.role]="'presentation'"
      [attr.aria-busy]="'true'"
      [attr.aria-label]="'Loading placeholder'"
    ></div>
  `,
  styleUrls: ['./skeleton.css'],
})
export class SkeletonComponent {
  /** Skeleton type */
  @Input() type: SkeletonType = 'rectangular';

  /** Width (auto, px, %, rem, etc.) */
  @Input() width: string | number = 'auto';

  /** Height (auto, px, %, rem, etc.) */
  @Input() height: string | number = 'auto';

  get skeletonClasses(): string[] {
    return [`skeleton-${this.type}`];
  }

  get computedWidth(): string {
    if (this.width === 'auto') return 'auto';
    if (typeof this.width === 'number') return `${this.width}px`;
    return this.width;
  }

  get computedHeight(): string {
    if (this.height === 'auto') return 'auto';
    if (typeof this.height === 'number') return `${this.height}px`;
    return this.height;
  }
}
