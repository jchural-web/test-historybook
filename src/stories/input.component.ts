import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export type InputSize = 'sm' | 'md' | 'lg';
export type InputState = 'default' | 'hover' | 'focus' | 'disabled' | 'error';
export type InputIcon = 'none' | 'leading';

@Component({
  selector: 'bsg-input',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="input-wrapper" [ngClass]="wrapperClasses">
      <svg 
        *ngIf="icon === 'leading'" 
        class="input-icon"
        width="16" 
        height="16" 
        viewBox="0 0 16 16" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 7.33334C12 4.75601 9.91066 2.66668 7.33333 2.66668C4.756 2.66668 2.66666 4.75601 2.66666 7.33334C2.66666 9.91067 4.756 12 7.33333 12C9.91066 12 12 9.91067 12 7.33334ZM13.3333 7.33334C13.3333 8.74999 12.8412 10.051 12.0202 11.0775L14.4713 13.5287C14.7317 13.789 14.7317 14.211 14.4713 14.4714C14.211 14.7317 13.789 14.7317 13.5286 14.4714L11.0775 12.0202C10.051 12.8412 8.74997 13.3333 7.33333 13.3333C4.01962 13.3333 1.33333 10.6471 1.33333 7.33334C1.33333 4.01963 4.01962 1.33334 7.33333 1.33334C10.647 1.33334 13.3333 4.01963 13.3333 7.33334Z" 
        [attr.fill]="iconColor"/>
      </svg>
      <input
        type="text"
        class="input-field"
        [placeholder]="placeholder"
        [disabled]="state === 'disabled'"
        [value]="value"
        (input)="onInput($event)"
        (focus)="onFocus()"
        (blur)="onBlur()"
        [ngClass]="inputClasses"
      />
    </div>
  `,
  styleUrls: ['./input.css'],
})
export class InputComponent {
  @Input() size: InputSize = 'md';
  @Input() state: InputState = 'default';
  @Input() icon: InputIcon = 'none';
  @Input() placeholder: string = 'Ingresa información';
  @Input() value: string = '';
  
  @Output() valueChange = new EventEmitter<string>();
  @Output() onInputChange = new EventEmitter<string>();
  @Output() onFocusEvent = new EventEmitter<void>();
  @Output() onBlurEvent = new EventEmitter<void>();

  get wrapperClasses(): string[] {
    return [
      'input',
      `input-${this.size}`,
      `input-state-${this.state}`,
      this.icon === 'leading' ? 'input-with-icon' : ''
    ].filter(Boolean);
  }

  get inputClasses(): string[] {
    return [
      this.icon === 'leading' ? 'has-icon' : ''
    ].filter(Boolean);
  }

  get iconColor(): string {
    if (this.state === 'error') {
      return '#DC2626';
    }
    return '#64748B';
  }

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.valueChange.emit(target.value);
    this.onInputChange.emit(target.value);
  }

  onFocus(): void {
    this.onFocusEvent.emit();
  }

  onBlur(): void {
    this.onBlurEvent.emit();
  }
}
