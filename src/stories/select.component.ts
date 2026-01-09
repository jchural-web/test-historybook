import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

export type SelectSize = 'sm' | 'md' | 'lg';
export type SelectState = 'default' | 'hover' | 'focus' | 'disabled' | 'error';

export interface SelectOption {
  value: string;
  label: string;
}

@Component({
  selector: 'bsg-select',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="select-wrapper" [ngClass]="wrapperClasses">
      <!-- Select trigger -->
      <button
        type="button"
        class="select-trigger"
        [ngClass]="triggerClasses"
        [disabled]="state === 'disabled'"
        [attr.aria-expanded]="open"
        [attr.aria-haspopup]="'listbox'"
        [attr.aria-disabled]="state === 'disabled'"
        (click)="toggleDropdown()"
      >
        <span class="select-value">{{ selectedLabel }}</span>
        <svg
          class="select-icon"
          [ngClass]="iconClasses"
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.2929 0.292893C12.6834 -0.0976311 13.3164 -0.0976311 13.707 0.292893C14.0975 0.683417 14.0975 1.31643 13.707 1.70696L7.70696 7.70696C7.31643 8.09748 6.68342 8.09748 6.29289 7.70696L0.292893 1.70696C-0.0976311 1.31643 -0.0976311 0.683417 0.292893 0.292893C0.683418 -0.0976311 1.31643 -0.0976311 1.70696 0.292893L6.99992 5.58586L12.2929 0.292893Z"
            [attr.fill]="iconColor"
          />
        </svg>
      </button>

      <!-- Dropdown menu -->
      <div *ngIf="open" class="select-dropdown" [ngClass]="dropdownClasses" role="listbox">
        <div
          *ngFor="let option of options; let i = index"
          class="select-option"
          [ngClass]="getOptionClasses(option.value)"
          [attr.role]="'option'"
          [attr.aria-selected]="selectedValue === option.value"
          (click)="selectOption(option)"
        >
          {{ option.label }}
        </div>
      </div>

      <!-- Error message -->
      <div *ngIf="state === 'error' && errorMessage" class="select-error-message">
        {{ errorMessage }}
      </div>
    </div>
  `,
  styleUrls: ['./select.css'],
})
export class SelectComponent {
  /** Size of the select */
  @Input() size: SelectSize = 'sm';

  /** Current state */
  @Input() state: SelectState = 'default';

  /** List of options */
  @Input() options: SelectOption[] = [
    { value: '1', label: 'Opcion 1' },
    { value: '2', label: 'Opcion 2' },
    { value: '3', label: 'Opcion 3' },
    { value: '4', label: 'Opcion 4' },
  ];

  /** Currently selected value */
  @Input() selectedValue: string = '';

  /** Placeholder text */
  @Input() placeholder: string = 'Selecciona';

  /** Dropdown open state */
  @Input() open: boolean = false;

  /** Error message (shown when state is 'error') */
  @Input() errorMessage: string = '';

  /** Value change event */
  @Output() valueChange = new EventEmitter<string>();

  /** Selection change event */
  @Output() selectionChange = new EventEmitter<SelectOption>();

  /** Open state change event */
  @Output() openChange = new EventEmitter<boolean>();

  get wrapperClasses(): string[] {
    return [`select-${this.size}`, `select-state-${this.state}`];
  }

  get triggerClasses(): string[] {
    const classes = [`select-trigger-${this.size}`, `select-trigger-${this.state}`];

    if (this.open) {
      classes.push('select-trigger-open');
    }

    return classes;
  }

  get dropdownClasses(): string[] {
    return [`select-dropdown-${this.size}`];
  }

  get iconClasses(): string[] {
    return [`select-icon-${this.state}`];
  }

  get selectedLabel(): string {
    if (!this.selectedValue) {
      return this.placeholder;
    }

    const selected = this.options.find((opt) => opt.value === this.selectedValue);
    return selected ? selected.label : this.placeholder;
  }

  get iconColor(): string {
    if (this.state === 'error') {
      return '#DC2626'; // Red-600
    }
    return '#64748B'; // neutral-500
  }

  getOptionClasses(value: string): string[] {
    const classes: string[] = [];

    if (this.selectedValue === value) {
      classes.push('select-option-selected');
    }

    return classes;
  }

  toggleDropdown(): void {
    if (this.state === 'disabled') {
      return;
    }

    this.open = !this.open;
    this.openChange.emit(this.open);
  }

  selectOption(option: SelectOption): void {
    if (this.state === 'disabled') {
      return;
    }

    this.selectedValue = option.value;
    this.open = false;

    this.valueChange.emit(option.value);
    this.selectionChange.emit(option);
    this.openChange.emit(false);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const selectWrapper = target.closest('.select-wrapper');

    if (!selectWrapper && this.open) {
      this.open = false;
      this.openChange.emit(false);
    }
  }
}
