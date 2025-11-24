import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface RadioOption {
  value: string | number;
  label: string;
}

@Component({
  selector: 'app-radio-group-maestro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './radio-group-maestro.component.html',
  styleUrls: ['./radio-group-maestro.component.css'],
})
export class RadioGroupMaestroComponent {
  @Input() options: RadioOption[] = [];
  @Input() selectedValue?: string | number | null;

  @Output() selectedValueChange = new EventEmitter<string | number>();

  selectOption(option: RadioOption): void {
    this.selectedValue = option.value;
    this.selectedValueChange.emit(option.value);
  }

  isSelected(value: string | number): boolean {
    return this.selectedValue === value;
  }
}
