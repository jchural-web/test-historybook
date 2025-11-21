import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export type ButtonVariant =
  | 'default'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | 'destructive'
  | 'link'
  | 'icono-circular'
  | 'icono-cuadrado'
  | 'ovalado'
  | 'pagination';

@Component({
  selector: 'app-boton-maestro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './boton-maestro.component.html',
  styleUrls: ['./boton-maestro.component.css'],
})
export class BotonMaestroComponent {
  @Input() label: string = 'Default';
  @Input() variant: ButtonVariant = 'default';
  @Input() iconName?: string;
  @Input() showIcon: boolean = false;
  @Input() disabled: boolean = false;

  @Output() clicked = new EventEmitter<MouseEvent>();

  constructor(private sanitizer: DomSanitizer) {}

  onClick(event: MouseEvent): void {
    if (!this.disabled) {
      this.clicked.emit(event);
    }
  }

  get buttonClass(): string {
    return `btn btn-${this.variant}`;
  }

  get sanitizedIconHtml(): SafeHtml {
    if (!this.iconName) return '';
    return this.sanitizer.bypassSecurityTrustHtml(this.iconName);
  }
}
