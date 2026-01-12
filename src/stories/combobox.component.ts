import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export type ComboboxSize = 'sm' | 'md' | 'lg';
export type ComboboxState = 'default' | 'hover' | 'focus' | 'disabled' | 'error';

export interface ComboboxOption {
  value: string;
  label: string;
}

@Component({
  selector: 'bsg-combobox',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="combobox-wrapper" [ngClass]="wrapperClasses">
      <!-- Combobox trigger -->
      <button
        type="button"
        class="combobox-trigger"
        [ngClass]="triggerClasses"
        [disabled]="state === 'disabled'"
        [attr.aria-expanded]="open"
        [attr.aria-haspopup]="'listbox'"
        [attr.aria-disabled]="state === 'disabled'"
        (click)="toggleDropdown()"
      >
        <span class="combobox-value">{{ selectedLabel }}</span>
        <svg
          class="combobox-icon"
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

      <!-- Dropdown menu with search -->
      <div *ngIf="open" class="combobox-dropdown" [ngClass]="dropdownClasses" role="listbox">
        <!-- Search input -->
        <div class="combobox-search-wrapper">
          <input
            type="text"
            class="combobox-search-input"
            [disabled]="state === 'disabled'"
            placeholder="Buscar..."
            [(ngModel)]="searchText"
            (input)="onSearchInput()"
            (keydown.escape)="closeDropdown()"
            aria-label="Search options"
          />
        </div>

        <!-- Options list -->
        <div class="combobox-options-container">
          <div
            *ngFor="let option of filteredOptions; let i = index"
            class="combobox-option"
            [ngClass]="getOptionClasses(option.value)"
            [attr.role]="'option'"
            [attr.aria-selected]="selectedValue === option.value"
            (click)="selectOption(option)"
          >
            {{ option.label }}
          </div>

          <!-- Empty state -->
          <div *ngIf="filteredOptions.length === 0" class="combobox-empty-state">
            Sin resultados
          </div>
        </div>
      </div>

      <!-- Error message -->
      <div *ngIf="state === 'error' && errorMessage" class="combobox-error-message">
        {{ errorMessage }}
      </div>
    </div>
  `,
  styleUrls: ['./combobox.css'],
})
export class ComboboxComponent {
  /** Size of the combobox */
  @Input() size: ComboboxSize = 'sm';

  /** Current state */
  @Input() state: ComboboxState = 'default';

  /** List of options */
  @Input() options: ComboboxOption[] = [
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
  @Output() selectionChange = new EventEmitter<ComboboxOption>();

  /** Open state change event */
  @Output() openChange = new EventEmitter<boolean>();

  /** Search text for filtering */
  searchText: string = '';

  get wrapperClasses(): string[] {
    return [`combobox-${this.size}`, `combobox-state-${this.state}`];
  }

  get triggerClasses(): string[] {
    const classes = [`combobox-trigger-${this.size}`, `combobox-trigger-${this.state}`];

    if (this.open) {
      classes.push('combobox-trigger-open');
    }

    return classes;
  }

  get dropdownClasses(): string[] {
    return [`combobox-dropdown-${this.size}`];
  }

  get iconClasses(): string[] {
    return [`combobox-icon-${this.state}`];
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

  get filteredOptions(): ComboboxOption[] {
    if (!this.searchText.trim()) {
      return this.options;
    }

    const searchLower = this.searchText.toLowerCase();
    return this.options.filter((option) =>
      option.label.toLowerCase().includes(searchLower)
    );
  }

  getOptionClasses(value: string): string[] {
    const classes: string[] = [];

    if (this.selectedValue === value) {
      classes.push('combobox-option-selected');
    }

    return classes;
  }

  toggleDropdown(): void {
    if (this.state === 'disabled') {
      return;
    }

    this.open = !this.open;
    if (this.open) {
      this.searchText = '';
    }
    this.openChange.emit(this.open);
  }

  closeDropdown(): void {
    this.open = false;
    this.searchText = '';
    this.openChange.emit(false);
  }

  onSearchInput(): void {
    // Filter options based on search text
    // Filtered options are computed via getter
  }

  selectOption(option: ComboboxOption): void {
    if (this.state === 'disabled') {
      return;
    }

    this.selectedValue = option.value;
    this.open = false;
    this.searchText = '';

    this.valueChange.emit(option.value);
    this.selectionChange.emit(option);
    this.openChange.emit(false);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const comboboxWrapper = target.closest('.combobox-wrapper');

    if (!comboboxWrapper && this.open) {
      this.open = false;
      this.searchText = '';
      this.openChange.emit(false);
    }
  }
}
