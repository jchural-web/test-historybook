import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CheckboxMaestroComponent } from '../checkbox-maestro/checkbox-maestro.component';

export type InputVariant = 'simple' | 'one-button' | 'two-buttons' | 'two-buttons-checkbox';

export interface InputButton {
  iconName: string;
  ariaLabel?: string;
}

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule, CheckboxMaestroComponent],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Input() variant: InputVariant = 'simple';
  @Input() type: 'text' | 'number' | 'password' | 'tel' | 'email' | 'search' = 'text';
  @Input() placeholder: string = '';
  @Input() value: string | number | null = null;

  @Input() button1?: InputButton;
  @Input() button2?: InputButton;

  @Input() checkboxLabel?: string;
  @Input() checkboxChecked: boolean = false;

  @Output() valueChange = new EventEmitter<string | number>();
  @Output() button1Click = new EventEmitter<void>();
  @Output() button2Click = new EventEmitter<void>();
  @Output() checkboxChange = new EventEmitter<boolean>();

  constructor(private sanitizer: DomSanitizer) {}

  onValueChange(newValue: string | number): void {
    this.value = newValue;
    this.valueChange.emit(newValue);
  }

  onButton1Click(): void {
    this.button1Click.emit();
  }

  onButton2Click(): void {
    this.button2Click.emit();
  }

  onCheckboxChange(checked: boolean): void {
    this.checkboxChecked = checked;
    this.checkboxChange.emit(checked);
  }

  getSanitizedIcon(iconName: string): SafeHtml {
    const svg = this.getIconSvg(iconName);
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  private getIconSvg(iconName: string): string {
    const iconMap: { [key: string]: string } = {
      copy: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_copy)">
<path d="M14 6.66663C14 6.29844 13.7015 5.99996 13.3333 5.99996H6.66666C6.29847 5.99996 5.99999 6.29844 5.99999 6.66663V13.3333C5.99999 13.7015 6.29847 14 6.66666 14H13.3333C13.7015 14 14 13.7015 14 13.3333V6.66663ZM9.99999 2.66663C9.99999 2.30148 9.69847 1.99996 9.33332 1.99996H2.66666C2.30151 1.99996 1.99999 2.30148 1.99999 2.66663V9.33329C1.99999 9.69844 2.30151 9.99996 2.66666 9.99996C3.03485 9.99996 3.33332 10.2984 3.33332 10.6666C3.33332 11.0348 3.03485 11.3333 2.66666 11.3333C1.56513 11.3333 0.666656 10.4348 0.666656 9.33329V2.66663C0.666656 1.5651 1.56513 0.666626 2.66666 0.666626H9.33332C10.4348 0.666626 11.3333 1.5651 11.3333 2.66663C11.3333 3.03482 11.0348 3.33329 10.6667 3.33329C10.2985 3.33329 9.99999 3.03482 9.99999 2.66663ZM15.3333 13.3333C15.3333 14.4379 14.4379 15.3333 13.3333 15.3333H6.66666C5.56209 15.3333 4.66666 14.4379 4.66666 13.3333V6.66663C4.66666 5.56206 5.56209 4.66663 6.66666 4.66663H13.3333C14.4379 4.66663 15.3333 5.56206 15.3333 6.66663V13.3333Z" fill="#8A8F9A"/>
</g>
<defs>
<clipPath id="clip0_copy">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>`,
      phone: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_phone)">
<path d="M4.66668 2.33337C4.66668 2.17866 4.60517 2.03034 4.49578 1.92094C4.40003 1.82519 4.27446 1.76612 4.14088 1.75289L4.08334 1.75004H2.33334C2.17863 1.75004 2.0303 1.81154 1.92091 1.92094C1.81151 2.03034 1.75001 2.17866 1.75001 2.33337C1.75001 4.96344 2.79498 7.4856 4.65471 9.34534C6.51445 11.2051 9.03661 12.25 11.6667 12.25C11.8214 12.25 11.9697 12.1885 12.0791 12.0791C12.1885 11.9697 12.25 11.8214 12.25 11.6667V9.91671C12.25 9.762 12.1885 9.61367 12.0791 9.50427C11.9697 9.39488 11.8214 9.33337 11.6667 9.33337H9.91668C9.82612 9.33337 9.73677 9.3544 9.65577 9.3949C9.57477 9.4354 9.50446 9.49449 9.45012 9.56693L9.44728 9.57092L9.23992 9.84094C9.07935 10.0519 8.85222 10.2022 8.59506 10.2665C8.33788 10.3307 8.06636 10.3053 7.82545 10.1947C7.82094 10.1926 7.81623 10.1906 7.81178 10.1884C6.07584 9.33646 4.67092 7.93337 3.81674 6.19853L3.8156 6.19625C3.69757 5.95409 3.66697 5.67853 3.72901 5.41638C3.79111 5.15418 3.94211 4.92139 4.15626 4.75785L4.16025 4.755L4.43312 4.54993C4.50556 4.49559 4.56465 4.42528 4.60515 4.34428C4.64565 4.26328 4.66668 4.17393 4.66668 4.08337V2.33337ZM5.83334 4.08337C5.83334 4.35505 5.77027 4.62309 5.64877 4.86609C5.52727 5.10909 5.35057 5.32059 5.13323 5.4836L4.86378 5.68469C5.60186 7.18298 6.8143 8.39518 8.31194 9.13399L8.51645 8.86682L8.58025 8.78707C8.73321 8.60611 8.9214 8.45756 9.13396 8.35128C9.37696 8.22978 9.645 8.16671 9.91668 8.16671H11.6667C12.1308 8.16671 12.5758 8.35121 12.904 8.6794C13.2322 9.00759 13.4167 9.45258 13.4167 9.91671V11.6667C13.4167 12.1308 13.2322 12.5758 12.904 12.904C12.5758 13.2322 12.1308 13.4167 11.6667 13.4167C8.72719 13.4167 5.90837 12.2487 3.82984 10.1702C1.75132 8.09168 0.583344 5.27286 0.583344 2.33337C0.583344 1.86925 0.76785 1.42426 1.09604 1.09607C1.42423 0.767881 1.86921 0.583374 2.33334 0.583374H4.08334C4.54747 0.583374 4.99246 0.767881 5.32065 1.09607C5.64884 1.42426 5.83334 1.86924 5.83334 2.33337V4.08337Z" fill="#3B82F6"/>
</g>
<defs>
<clipPath id="clip0_phone">
<rect width="14" height="14" fill="white"/>
</clipPath>
</defs>
</svg>`,
      square: `<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5 3.125C12.5 2.77982 12.2202 2.5 11.875 2.5H3.125C2.77982 2.5 2.5 2.77982 2.5 3.125V11.875C2.5 12.2202 2.77982 12.5 3.125 12.5H11.875C12.2202 12.5 12.5 12.2202 12.5 11.875V3.125ZM13.75 11.875C13.75 12.9105 12.9105 13.75 11.875 13.75H3.125C2.08947 13.75 1.25 12.9105 1.25 11.875V3.125C1.25 2.08947 2.08947 1.25 3.125 1.25H11.875C12.9105 1.25 13.75 2.08947 13.75 3.125V11.875Z" fill="#8A8F9A"/>
</svg>`,
    };

    return iconMap[iconName] || '';
  }
}
