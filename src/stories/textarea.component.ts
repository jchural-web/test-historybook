import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelComponent } from './label.component';
import { ButtonComponent } from './button.component';

export type TextareaState = 'default' | 'hover' | 'focus' | 'disabled' | 'error';
export type TextareaComposition = 'default' | 'withLabel' | 'withText' | 'withButton';

@Component({
  selector: 'bsg-textarea',
  standalone: true,
  imports: [CommonModule, LabelComponent, ButtonComponent],
  template: `
    <div class="textarea-composition" [ngClass]="compositionClasses">
      <!-- Label (for withLabel and withText) -->
      <bsg-label
        *ngIf="composition === 'withLabel' || composition === 'withText'"
        [text]="labelText"
        class="composition-label"
      ></bsg-label>

      <!-- Textarea Field -->
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

      <!-- Helper Text (for withText) -->
      <span *ngIf="composition === 'withText'" class="composition-helper-text">{{
        helperText
      }}</span>

      <!-- Button (for withButton) -->
      <bsg-button
        *ngIf="composition === 'withButton'"
        [label]="buttonLabel"
        [state]="state === 'disabled' ? 'disabled' : 'default'"
        (onClick)="onButtonClick($event)"
        class="composition-button"
      ></bsg-button>
    </div>
  `,
  styleUrls: ['./textarea.css'],
})
export class TextareaComponent {
  @Input() state: TextareaState = 'default';
  @Input() placeholder: string = 'Ingresa información';
  @Input() value: string = '';
  @Input() rows: number = 3;
  @Input() composition: TextareaComposition = 'default';
  @Input() labelText: string = 'Etiqueta';
  @Input() helperText: string = 'Texto auxiliar';
  @Input() buttonLabel: string = 'Enviar';

  @Output() valueChange = new EventEmitter<string>();
  @Output() onInputChange = new EventEmitter<string>();
  @Output() onFocusEvent = new EventEmitter<void>();
  @Output() onBlurEvent = new EventEmitter<void>();
  @Output() onButtonClick = new EventEmitter<Event>();

  get compositionClasses(): string[] {
    return ['textarea-composition', `composition-${this.composition}`].filter(Boolean);
  }

  get wrapperClasses(): string[] {
    return ['textarea', `textarea-state-${this.state}`].filter(Boolean);
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

  handleButtonClick(event: Event): void {
    this.onButtonClick.emit(event);
  }
}
