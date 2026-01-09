import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioComponent, RadioSize } from './radio.component';

export type RadioGroupOrientation = 'horizontal' | 'vertical';

export interface RadioGroupOption {
  value: string;
  label: string;
  disabled?: boolean;
}

@Component({
  selector: 'bsg-radio-group',
  standalone: true,
  imports: [CommonModule, RadioComponent],
  template: `
    <div 
      class="radio-group"
      [ngClass]="groupClasses"
      [attr.role]="'radiogroup'"
    >
      <label 
        *ngFor="let option of options; let i = index"
        class="radio-option"
        [ngClass]="optionClasses"
        (click)="selectOption(option.value)"
      >
        <storybook-radio
          [size]="size"
          [state]="getRadioState(option.value, option.disabled)"
          [checked]="selectedValue === option.value"
        ></storybook-radio>
        <span class="radio-label" [ngClass]="labelClasses">{{ option.label }}</span>
      </label>
    </div>
  `,
  styleUrls: ['./radio-group.css'],
})
export class RadioGroupComponent {
  /** Size of the radio buttons */
  @Input() size: RadioSize = 'md';

  /** Layout orientation */
  @Input() orientation: RadioGroupOrientation = 'horizontal';

  /** List of options */
  @Input() options: RadioGroupOption[] = [
    { value: '1', label: 'Uno' },
    { value: '2', label: 'Dos' },
    { value: '3', label: 'Tres' },
  ];

  /** Currently selected value */
  @Input() selectedValue: string = '';

  /** Value change event */
  @Output() valueChange = new EventEmitter<string>();

  /** Selection change event */
  @Output() selectionChange = new EventEmitter<RadioGroupOption>();

  get groupClasses(): string[] {
    return [
      `radio-group-${this.orientation}`,
      `radio-group-${this.size}`,
    ];
  }

  get optionClasses(): string[] {
    return [
      `radio-option-${this.size}`,
    ];
  }

  get labelClasses(): string[] {
    return [
      `radio-label-${this.size}`,
    ];
  }

  getRadioState(value: string, disabled?: boolean): 'default' | 'checked' | 'disabled' {
    if (disabled) {
      return 'disabled';
    }
    return this.selectedValue === value ? 'checked' : 'default';
  }

  selectOption(value: string): void {
    const option = this.options.find(opt => opt.value === value);
    
    if (option && !option.disabled) {
      this.selectedValue = value;
      this.valueChange.emit(value);
      this.selectionChange.emit(option);
    }
  }
}
