import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export type InputSize = 'sm' | 'md' | 'lg';
export type InputState = 'default' | 'hover' | 'focus' | 'disabled' | 'error';
export type InputIcon = 'none' | 'leading';
export type InputType = 'text' | 'password';

@Component({
  selector: 'bsg-input',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="input-container" [ngClass]="containerClasses">
      <!-- Optional Label -->
      <label *ngIf="label" class="input-label">{{ label }}</label>

      <!-- Input Wrapper -->
      <div class="input-wrapper" [ngClass]="wrapperClasses">
      <!-- Leading Icon -->
      <svg
        *ngIf="icon === 'leading'"
        class="input-icon input-icon-leading"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 7.33334C12 4.75601 9.91066 2.66668 7.33333 2.66668C4.756 2.66668 2.66666 4.75601 2.66666 7.33334C2.66666 9.91067 4.756 12 7.33333 12C9.91066 12 12 9.91067 12 7.33334ZM13.3333 7.33334C13.3333 8.74999 12.8412 10.051 12.0202 11.0775L14.4713 13.5287C14.7317 13.789 14.7317 14.211 14.4713 14.4714C14.211 14.7317 13.789 14.7317 13.5286 14.4714L11.0775 12.0202C10.051 12.8412 8.74997 13.3333 7.33333 13.3333C4.01962 13.3333 1.33333 10.6471 1.33333 7.33334C1.33333 4.01963 4.01962 1.33334 7.33333 1.33334C10.647 1.33334 13.3333 4.01963 13.3333 7.33334Z"
          [attr.fill]="iconColor"
        />
      </svg>

      <!-- Input Field -->
      <input
        [type]="inputType"
        class="input-field"
        [placeholder]="placeholder"
        [disabled]="state === 'disabled'"
        [value]="value"
        (input)="onInput($event)"
        (focus)="onFocus()"
        (blur)="onBlur()"
        [ngClass]="inputClasses"
      />

      <!-- Password Toggle Button (Eye Icon) -->
      <button
        *ngIf="type === 'password'"
        type="button"
        class="password-toggle-btn"
        [disabled]="state === 'disabled'"
        (click)="togglePasswordVisibility()"
        [attr.aria-label]="showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'"
        [attr.aria-pressed]="showPassword"
      >
        <!-- Eye Open Icon (visible password) -->
        <svg
          *ngIf="showPassword"
          class="eye-icon"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
            [attr.stroke]="passwordIconColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
          />
          <circle
            cx="12"
            cy="12"
            r="3"
            [attr.stroke]="passwordIconColor"
            stroke-width="2"
            fill="none"
          />
        </svg>

        <!-- Eye Closed Icon (hidden password) -->
        <svg
          *ngIf="!showPassword"
          class="eye-icon"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
            [attr.stroke]="passwordIconColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
          />
          <line
            x1="1"
            y1="1"
            x2="23"
            y2="23"
            [attr.stroke]="passwordIconColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  `,
  styleUrls: ['./input.css'],
})
export class InputComponent {
  @Input() size: InputSize = 'md';
  @Input() state: InputState = 'default';
  @Input() icon: InputIcon = 'none';
  @Input() type: InputType = 'text';
  @Input() placeholder: string = 'Ingresa información';
  @Input() value: string = '';

  @Output() valueChange = new EventEmitter<string>();
  @Output() onInputChange = new EventEmitter<string>();
  @Output() onFocusEvent = new EventEmitter<void>();
  @Output() onBlurEvent = new EventEmitter<void>();

  showPassword: boolean = false;

  get inputType(): string {
    if (this.type === 'password') {
      return this.showPassword ? 'text' : 'password';
    }
    return this.type;
  }

  get wrapperClasses(): string[] {
    return [
      'input',
      `input-${this.size}`,
      `input-state-${this.state}`,
      this.icon === 'leading' ? 'input-with-icon-leading' : '',
      this.type === 'password' ? 'input-with-password-toggle' : '',
    ].filter(Boolean);
  }

  get inputClasses(): string[] {
    return [this.icon === 'leading' ? 'has-icon-leading' : ''].filter(Boolean);
  }

  get iconColor(): string {
    if (this.state === 'error') {
      return '#DC2626';
    }
    return '#64748B';
  }

  get passwordIconColor(): string {
    if (this.state === 'disabled') {
      return '#CBD5E1';
    }
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

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
