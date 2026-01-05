import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export type TextareaState = 'default' | 'hover' | 'focus' | 'disabled' | 'error';

@Component({
  selector: 'storybook-textarea',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="textarea-wrapper" [ngClass]="wrapperClasses">
      <textarea
        class="textarea-field"
        [placeholder]="placeholder"
        [disabled]="state === 'disabled'"
        [value]="value"
        (input)="onInput($event)"
        (focus)="onFocus()"
        (blur)="onBlur()"
        [attr.rows]="rows"
        [ngClass]="textareaClasses"
      ></textarea>
    </div>
  `,
  styleUrls: ['./textarea.css'],
})
export class TextareaComponent {
  @Input() state: TextareaState = 'default';
  @Input() placeholder: string = 'Ingresa información';
  @Input() value: string = '';
  @Input() rows: number = 3;
  
  @Output() valueChange = new EventEmitter<string>();
  @Output() onInputChange = new EventEmitter<string>();
  @Output() onFocusEvent = new EventEmitter<void>();
  @Output() onBlurEvent = new EventEmitter<void>();

  get wrapperClasses(): string[] {
    return [
      'textarea',
      `textarea-state-${this.state}`
    ].filter(Boolean);
  }

  get textareaClasses(): string[] {
    return [];
  }

  onInput(event: Event): void {
    const target = event.target as HTMLTextAreaElement;
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
