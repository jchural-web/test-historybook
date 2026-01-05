import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export type CheckboxSize = 'sm' | 'md';
export type CheckboxState = 'default' | 'hover' | 'checked' | 'disabled' | 'indeterminate' | 'focus';

@Component({
  selector: 'storybook-checkbox',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      class="checkbox-wrapper"
      [ngClass]="wrapperClasses"
      (click)="handleClick()"
      [attr.role]="'checkbox'"
      [attr.aria-checked]="ariaChecked"
      [attr.aria-disabled]="state === 'disabled'"
      [attr.tabindex]="state === 'disabled' ? -1 : 0"
    >
      <!-- Check icon for checked state -->
      <svg 
        *ngIf="state === 'checked'" 
        class="checkbox-icon"
        [attr.width]="iconSize"
        [attr.height]="iconSize"
        viewBox="0 0 21 21" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.8813 4.63134C17.2231 4.28963 17.7769 4.28963 18.1187 4.63134C18.4604 4.97305 18.4604 5.52694 18.1187 5.86865L8.49366 15.4936C8.15195 15.8354 7.59806 15.8354 7.25635 15.4936L2.88135 11.1186C2.53964 10.7769 2.53964 10.2231 2.88135 9.88134C3.22306 9.53963 3.77695 9.53963 4.11865 9.88134L7.875 13.6377L16.8813 4.63134Z" 
        fill="white"/>
      </svg>

      <!-- Indeterminate icon (line) -->
      <svg 
        *ngIf="state === 'indeterminate'" 
        class="checkbox-icon"
        [attr.width]="iconSize"
        [attr.height]="iconSize"
        viewBox="0 0 20 20" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5 10H15" stroke="white" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </div>
  `,
  styleUrls: ['./checkbox.css'],
})
export class CheckboxComponent {
  @Input() size: CheckboxSize = 'md';
  @Input() state: CheckboxState = 'default';
  @Input() checked: boolean = false;
  
  @Output() stateChange = new EventEmitter<CheckboxState>();
  @Output() checkedChange = new EventEmitter<boolean>();
  @Output() onChange = new EventEmitter<boolean>();

  get wrapperClasses(): string[] {
    return [
      'checkbox',
      `checkbox-${this.size}`,
      `checkbox-state-${this.state}`
    ];
  }

  get iconSize(): number {
    return this.size === 'sm' ? 17 : 21;
  }

  get ariaChecked(): string {
    if (this.state === 'indeterminate') {
      return 'mixed';
    }
    return this.state === 'checked' ? 'true' : 'false';
  }

  handleClick(): void {
    if (this.state === 'disabled') {
      return;
    }

    // Toggle between checked states
    if (this.state === 'checked') {
      this.state = 'default';
      this.checked = false;
    } else if (this.state === 'indeterminate') {
      this.state = 'checked';
      this.checked = true;
    } else {
      this.state = 'checked';
      this.checked = true;
    }

    this.stateChange.emit(this.state);
    this.checkedChange.emit(this.checked);
    this.onChange.emit(this.checked);
  }
}
