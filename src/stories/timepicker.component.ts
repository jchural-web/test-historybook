import { Component, Input, Output, EventEmitter, HostListener, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export type TimePickerSize = 'sm' | 'md' | 'lg';
export type TimePickerState = 'default' | 'hover' | 'focus' | 'disabled' | 'error';

@Component({
  selector: 'bsg-timepicker',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="timepicker-field-container">
      <!-- Optional Label -->
      <label *ngIf="label" class="timepicker-label">{{ label }}</label>

      <!-- TimePicker Input Wrapper -->
      <div class="timepicker-wrapper" [ngClass]="wrapperClasses">
        <!-- Time Input Field -->
        <input
          #timeInput
          type="text"
          class="timepicker-input-field"
          [value]="timeValue"
          [placeholder]="placeholder"
          [disabled]="state === 'disabled'"
          [attr.aria-invalid]="state === 'error'"
          [attr.aria-describedby]="state === 'error' && errorMessage ? errorMessageId : null"
          (click)="openDropdown()"
          (focus)="onFocus()"
          (blur)="onBlur()"
          [ngClass]="inputClasses"
          readonly
        />

        <!-- Clock Icon (Trailing) -->
        <button
          type="button"
          class="timepicker-icon-btn"
          [disabled]="state === 'disabled'"
          (click)="toggleDropdown()"
          [attr.aria-label]="open ? 'Cerrar selector de hora' : 'Abrir selector de hora'"
          [attr.aria-pressed]="open"
        >
          <svg
            class="timepicker-clock-icon"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              [attr.stroke]="iconColor"
              stroke-width="2"
            />
            <path
              d="M12 6V12L16 16"
              [attr.stroke]="iconColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <!-- Dropdown (positioned relative to wrapper) -->
        <div *ngIf="open" class="timepicker-dropdown" [ngClass]="dropdownClasses" role="dialog" aria-label="Selector de hora">
          <!-- Time Selection Area -->
          <div class="timepicker-selection-area">
            <!-- Hours Column -->
            <div class="timepicker-column">
              <div class="timepicker-column-header">Horas</div>
              <div class="timepicker-list" #hoursList>
                <div
                  *ngFor="let hour of availableHours"
                  class="timepicker-option"
                  [ngClass]="{ 'selected': selectedHour === hour, 'disabled': isHourDisabled(hour) }"
                  [attr.data-value]="hour"
                  (click)="selectHour(hour)"
                >
                  {{ formatNumber(hour) }}
                </div>
              </div>
            </div>

            <!-- Separator -->
            <div class="timepicker-separator">:</div>

            <!-- Minutes Column -->
            <div class="timepicker-column">
              <div class="timepicker-column-header">Minutos</div>
              <div class="timepicker-list" #minutesList>
                <div
                  *ngFor="let minute of availableMinutes"
                  class="timepicker-option"
                  [ngClass]="{ 'selected': selectedMinute === minute, 'disabled': isMinuteDisabled(minute) }"
                  [attr.data-value]="minute"
                  (click)="selectMinute(minute)"
                >
                  {{ formatNumber(minute) }}
                </div>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="timepicker-actions">
            <button
              type="button"
              class="timepicker-action-btn timepicker-action-now"
              (click)="selectNow()"
              [disabled]="state === 'disabled'"
            >
              Ahora
            </button>
            <button
              type="button"
              class="timepicker-action-btn timepicker-action-clear"
              (click)="clearTime()"
              [disabled]="state === 'disabled'"
            >
              Limpiar
            </button>
          </div>
        </div>
      </div>

      <!-- Error Message -->
      <span *ngIf="state === 'error' && errorMessage" class="timepicker-error-message" [attr.id]="errorMessageId">
        {{ errorMessage }}
      </span>
    </div>
  `,
  styleUrls: ['./timepicker.css'],
})
export class TimePickerComponent {
  /** Size of the input */
  @Input() size: TimePickerSize = 'md';

  /** Current state */
  @Input() state: TimePickerState = 'default';

  /** Selected time in HH:mm format */
  @Input() value: string = '';

  /** Placeholder text */
  @Input() placeholder: string = 'HH:mm';

  /** Optional label */
  @Input() label: string = '';

  /** Error message */
  @Input() errorMessage: string = '';

  /** Minimum time (HH:mm format) - hours/minutes before this are disabled */
  @Input() minTime: string = '';

  /** Maximum time (HH:mm format) - hours/minutes after this are disabled */
  @Input() maxTime: string = '';

  /** Step for minutes (e.g., 5, 10, 15) */
  @Input() stepMinutes: number = 1;

  /** Dropdown open state */
  @Input() open: boolean = false;

  /** Value change event */
  @Output() valueChange = new EventEmitter<string>();

  /** Selection change event */
  @Output() selectionChange = new EventEmitter<{ hour: number; minute: number }>();

  /** Open state change event */
  @Output() openChange = new EventEmitter<boolean>();

  @ViewChild('hoursList') hoursList: ElementRef | undefined;
  @ViewChild('minutesList') minutesList: ElementRef | undefined;

  selectedHour: number = 0;
  selectedMinute: number = 0;

  get errorMessageId(): string {
    return `timepicker-error-${Math.random().toString(36).substr(2, 9)}`;
  }

  get timeValue(): string {
    if (!this.value) {
      return '';
    }
    return this.value;
  }

  get wrapperClasses(): string[] {
    return [
      'timepicker-input',
      `timepicker-${this.size}`,
      `timepicker-state-${this.state}`,
      this.open ? 'timepicker-open' : '',
    ].filter(Boolean);
  }

  get inputClasses(): string[] {
    return [];
  }

  get dropdownClasses(): string[] {
    return [`timepicker-dropdown-${this.size}`];
  }

  get iconColor(): string {
    if (this.state === 'error') {
      return '#DC2626';
    }
    return '#64748B';
  }

  get availableHours(): number[] {
    return Array.from({ length: 24 }, (_, i) => i);
  }

  get availableMinutes(): number[] {
    const minutes: number[] = [];
    for (let i = 0; i < 60; i += this.stepMinutes) {
      minutes.push(i);
    }
    return minutes;
  }

  parseTime(time: string): { hour: number; minute: number } {
    if (!time) {
      return { hour: 0, minute: 0 };
    }
    const [h, m] = time.split(':').map(Number);
    return { hour: isNaN(h) ? 0 : h, minute: isNaN(m) ? 0 : m };
  }

  formatNumber(value: number): string {
    return String(value).padStart(2, '0');
  }

  isHourDisabled(hour: number): boolean {
    if (!this.minTime && !this.maxTime) {
      return false;
    }

    const minParsed = this.parseTime(this.minTime);
    const maxParsed = this.parseTime(this.maxTime);

    if (this.minTime && hour < minParsed.hour) {
      return true;
    }

    if (this.maxTime && hour > maxParsed.hour) {
      return true;
    }

    return false;
  }

  isMinuteDisabled(minute: number): boolean {
    if (!this.minTime && !this.maxTime) {
      return false;
    }

    const minParsed = this.parseTime(this.minTime);
    const maxParsed = this.parseTime(this.maxTime);

    // If current hour is min hour, check minute
    if (this.minTime && this.selectedHour === minParsed.hour && minute < minParsed.minute) {
      return true;
    }

    // If current hour is max hour, check minute
    if (this.maxTime && this.selectedHour === maxParsed.hour && minute > maxParsed.minute) {
      return true;
    }

    return false;
  }

  selectHour(hour: number): void {
    if (this.state === 'disabled' || this.isHourDisabled(hour)) {
      return;
    }
    this.selectedHour = hour;
    this.updateTimeValue();
  }

  selectMinute(minute: number): void {
    if (this.state === 'disabled' || this.isMinuteDisabled(minute)) {
      return;
    }
    this.selectedMinute = minute;
    this.updateTimeValue();
  }

  selectNow(): void {
    if (this.state === 'disabled') {
      return;
    }
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();

    // Snap minute to nearest step
    const snappedMinute = Math.round(minute / this.stepMinutes) * this.stepMinutes;

    this.selectedHour = hour;
    this.selectedMinute = Math.min(snappedMinute, 59);
    this.updateTimeValue();
  }

  clearTime(): void {
    if (this.state === 'disabled') {
      return;
    }
    this.selectedHour = 0;
    this.selectedMinute = 0;
    this.value = '';
    this.valueChange.emit('');
    this.selectionChange.emit({ hour: 0, minute: 0 });
  }

  updateTimeValue(): void {
    const newValue = `${this.formatNumber(this.selectedHour)}:${this.formatNumber(this.selectedMinute)}`;
    this.value = newValue;
    this.valueChange.emit(newValue);
    this.selectionChange.emit({ hour: this.selectedHour, minute: this.selectedMinute });
  }

  toggleDropdown(): void {
    if (this.state === 'disabled') {
      return;
    }
    this.open = !this.open;
    this.openChange.emit(this.open);
  }

  openDropdown(): void {
    if (this.state === 'disabled') {
      return;
    }
    if (!this.open) {
      this.open = true;
      this.openChange.emit(true);
    }
  }

  closeDropdown(): void {
    this.open = false;
    this.openChange.emit(false);
  }

  onFocus(): void {
    // Handled by click event
  }

  onBlur(): void {
    // Handled by outside click detection
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const timepickerWrapper = target.closest('.timepicker-wrapper');
    const timepickerDropdown = target.closest('.timepicker-dropdown');

    if (!timepickerWrapper && !timepickerDropdown && this.open) {
      this.closeDropdown();
    }
  }

  ngOnInit(): void {
    if (this.value) {
      const parsed = this.parseTime(this.value);
      this.selectedHour = parsed.hour;
      this.selectedMinute = parsed.minute;
    }
  }
}
