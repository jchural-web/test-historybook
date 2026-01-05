import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export type RadioSize = 'sm' | 'md';
export type RadioState = 'default' | 'hover' | 'checked' | 'disabled' | 'focus';

@Component({
  selector: 'storybook-radio',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      class="radio-wrapper"
      [ngClass]="wrapperClasses"
      (click)="handleClick()"
      [attr.role]="'radio'"
      [attr.aria-checked]="state === 'checked'"
      [attr.aria-disabled]="state === 'disabled'"
      [attr.tabindex]="state === 'disabled' ? -1 : 0"
    >
      <!-- Focus ring (outer) -->
      <svg 
        *ngIf="state === 'focus'" 
        class="radio-focus-ring"
        [attr.width]="focusRingSize"
        [attr.height]="focusRingSize"
        [attr.viewBox]="'0 0 ' + focusRingSize + ' ' + focusRingSize"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle 
          [attr.cx]="focusRingSize / 2" 
          [attr.cy]="focusRingSize / 2" 
          [attr.r]="focusRingSize / 2 - 0.5" 
          [attr.stroke]="focusRingColor" 
          stroke-width="1"
        />
      </svg>

      <!-- Outer circle -->
      <svg 
        class="radio-outer"
        [attr.width]="outerSize"
        [attr.height]="outerSize"
        [attr.viewBox]="'0 0 ' + outerSize + ' ' + outerSize"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle 
          [attr.cx]="outerSize / 2" 
          [attr.cy]="outerSize / 2" 
          [attr.r]="outerSize / 2 - 0.5" 
          [attr.stroke]="outerStrokeColor" 
          [attr.fill]="outerFillColor"
          stroke-width="1"
        />
      </svg>

      <!-- Inner dot (indicator) for checked state -->
      <svg 
        *ngIf="state === 'checked'" 
        class="radio-inner"
        [attr.width]="innerSize"
        [attr.height]="innerSize"
        [attr.viewBox]="'0 0 ' + innerSize + ' ' + innerSize"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle 
          [attr.cx]="innerSize / 2" 
          [attr.cy]="innerSize / 2" 
          [attr.r]="innerSize / 2 - 0.5" 
          fill="#2563EB" 
          stroke="#2563EB"
          stroke-width="1"
        />
      </svg>
    </div>
  `,
  styleUrls: ['./radio.css'],
})
export class RadioComponent {
  @Input() size: RadioSize = 'md';
  @Input() state: RadioState = 'default';
  @Input() checked: boolean = false;
  
  @Output() stateChange = new EventEmitter<RadioState>();
  @Output() checkedChange = new EventEmitter<boolean>();
  @Output() onChange = new EventEmitter<boolean>();

  get wrapperClasses(): string[] {
    return [
      'radio',
      `radio-${this.size}`,
      `radio-state-${this.state}`
    ];
  }

  // Outer circle size
  get outerSize(): number {
    return this.size === 'sm' ? 16 : 20;
  }

  // Inner dot size (when checked)
  get innerSize(): number {
    return this.size === 'sm' ? 10 : 14;
  }

  // Focus ring size (3px larger on each side = 6px total)
  get focusRingSize(): number {
    return this.size === 'sm' ? 22 : 26;
  }

  // Outer stroke color based on state
  get outerStrokeColor(): string {
    if (this.state === 'disabled') {
      return '#64748B'; // neutral-500
    }
    if (this.state === 'hover') {
      return '#3B82F6'; // Blue-500
    }
    if (this.state === 'checked') {
      return '#2563EB'; // Blue-600
    }
    if (this.state === 'focus') {
      return '#64748B'; // neutral-500
    }
    return '#64748B'; // neutral-500 (default)
  }

  // Outer fill color
  get outerFillColor(): string {
    if (this.state === 'disabled') {
      return '#64748B'; // neutral-500 with opacity applied via CSS
    }
    return 'none';
  }

  // Focus ring color
  get focusRingColor(): string {
    return this.size === 'sm' ? '#7C3AED' : '#9333EA'; // Violet-600 for sm, Purple-600 for md
  }

  handleClick(): void {
    if (this.state === 'disabled') {
      return;
    }
    
    const newState: RadioState = this.state === 'checked' ? 'default' : 'checked';
    const newChecked = !this.checked;
    
    this.state = newState;
    this.checked = newChecked;
    
    this.stateChange.emit(newState);
    this.checkedChange.emit(newChecked);
    this.onChange.emit(newChecked);
  }
}
