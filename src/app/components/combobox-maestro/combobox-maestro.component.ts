import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export interface ComboOption {
  value: string | number;
  label: string;
}

@Component({
  selector: 'app-combobox-maestro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './combobox-maestro.component.html',
  styleUrls: ['./combobox-maestro.component.css'],
})
export class ComboboxMaestroComponent {
  @Input() placeholder: string = 'Selecciona una opción';
  @Input() options: ComboOption[] = [];
  @Input() selectedValue?: string | number | null;
  @Input() width?: string;

  @Output() selectedValueChange = new EventEmitter<string | number>();

  isOpen: boolean = false;

  constructor(private sanitizer: DomSanitizer) {}

  toggleCombobox(): void {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: ComboOption): void {
    this.selectedValue = option.value;
    this.selectedValueChange.emit(option.value);
    this.isOpen = false;
  }

  getSelectedLabel(): string {
    if (!this.selectedValue) {
      return this.placeholder;
    }
    const selected = this.options.find(opt => opt.value === this.selectedValue);
    return selected ? selected.label : this.placeholder;
  }

  get containerStyle(): { [key: string]: string } {
    const styles: { [key: string]: string } = {};
    if (this.width) {
      styles['width'] = this.width;
    }
    return styles;
  }

  getSanitizedIcon(iconName: string): SafeHtml {
    const svg = this.getIconSvg(iconName);
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  private getIconSvg(iconName: string): string {
    const iconMap: { [key: string]: string } = {
      'chevron-down': `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.9697 6.21973C13.2626 5.92684 13.7374 5.92684 14.0303 6.21973C14.3232 6.51262 14.3232 6.98738 14.0303 7.28028L9.53028 11.7803C9.23739 12.0732 8.76262 12.0732 8.46973 11.7803L3.96973 7.28028C3.67684 6.98738 3.67684 6.51262 3.96973 6.21973C4.26262 5.92684 4.73738 5.92684 5.03028 6.21973L9 10.1895L12.9697 6.21973Z" fill="#A8AFB9"/>
</svg>`,
      'chevron-up': `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.03027 11.7803C4.73738 12.0732 4.26262 12.0732 3.96972 11.7803C3.67683 11.4874 3.67683 11.0126 3.96972 10.7197L8.46972 6.21972C8.76262 5.92683 9.23738 5.92683 9.53027 6.21972L14.0303 10.7197C14.3232 11.0126 14.3232 11.4874 14.0303 11.7803C13.7374 12.0732 13.2626 12.0732 12.9697 11.7803L9 7.81054L5.03027 11.7803Z" fill="#A8AFB9"/>
</svg>`,
    };

    return iconMap[iconName] || '';
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.combobox-container')) {
      this.isOpen = false;
    }
  }
}
