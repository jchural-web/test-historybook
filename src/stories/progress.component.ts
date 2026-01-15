import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ProgressSize = 'sm' | 'md' | 'lg';
export type ProgressType = 'circular' | 'linear';
export type ProgressMode = 'determinate' | 'indeterminate';

@Component({
  selector: 'bsg-progress',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Circular Progress -->
    <div
      *ngIf="type === 'circular'"
      class="circular-progress"
      [ngClass]="['circular-progress-' + size]"
    >
      <svg
        [attr.width]="circularDimensions.size"
        [attr.height]="circularDimensions.size"
        [attr.viewBox]="'0 0 ' + circularDimensions.size + ' ' + circularDimensions.size"
      >
        <!-- Background circle (track) -->
        <circle
          class="progress-track"
          [attr.cx]="circularDimensions.center"
          [attr.cy]="circularDimensions.center"
          [attr.r]="circularDimensions.radius"
          [attr.stroke-width]="circularDimensions.strokeWidth"
          fill="none"
        />

        <!-- Progress circle (fill) -->
        <circle
          class="progress-fill"
          [ngClass]="{ 'progress-indeterminate': mode === 'indeterminate' }"
          [attr.cx]="circularDimensions.center"
          [attr.cy]="circularDimensions.center"
          [attr.r]="circularDimensions.radius"
          [attr.stroke-width]="circularDimensions.strokeWidth"
          [attr.stroke-dasharray]="circumference"
          [attr.stroke-dashoffset]="mode === 'determinate' ? strokeDashOffset : 0"
          fill="none"
          [style.transform]="'rotate(-90deg)'"
          [style.transform-origin]="'center'"
        />
      </svg>

      <!-- Center content for determinate mode -->
      <div
        *ngIf="mode === 'determinate'"
        class="circular-content"
        [ngClass]="'circular-content-' + size"
      >
        <div class="circular-percentage" [ngClass]="'circular-percentage-' + size">
          {{ value }}%
        </div>
        <div *ngIf="size === 'lg' && label" class="circular-label">{{ label }}</div>
      </div>
    </div>

    <!-- Linear Progress -->
    <div *ngIf="type === 'linear'" class="linear-progress-container">
      <!-- Label for determinate mode -->
      <div *ngIf="mode === 'determinate' && label" class="linear-label">
        {{ label }} {{ value }}%
      </div>

      <!-- Progress bar -->
      <div class="linear-progress">
        <div class="linear-track"></div>
        <div
          class="linear-fill"
          [ngClass]="{ 'linear-indeterminate': mode === 'indeterminate' }"
          [style.width.%]="mode === 'determinate' ? value : 0"
        ></div>
      </div>
    </div>
  `,
  styleUrls: ['./progress.css'],
})
export class ProgressComponent {
  /** Progress size */
  @Input() size: ProgressSize = 'md';

  /** Progress type */
  @Input() type: ProgressType = 'circular';

  /** Progress mode */
  @Input() mode: ProgressMode = 'determinate';

  /** Progress value (0-100, only for determinate mode) */
  @Input() value: number = 51;

  /** Label text (for linear determinate or circular lg) */
  @Input() label: string = 'Progreso general';

  // Circular progress dimensions based on Figma design
  get circularDimensions() {
    const dimensions = {
      sm: { size: 40, strokeWidth: 3, radius: 18.5 },
      md: { size: 64, strokeWidth: 5, radius: 29.5 },
      lg: { size: 124, strokeWidth: 8, radius: 58 },
    };

    const dim = dimensions[this.size];
    return {
      ...dim,
      center: dim.size / 2,
    };
  }

  // Calculate circumference for circular progress
  get circumference(): number {
    return 2 * Math.PI * this.circularDimensions.radius;
  }

  // Calculate stroke dash offset based on value
  get strokeDashOffset(): number {
    const progress = Math.max(0, Math.min(100, this.value));
    return this.circumference - (progress / 100) * this.circumference;
  }
}
