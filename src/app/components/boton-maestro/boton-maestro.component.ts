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
  @Input() bgColor?: string;
  @Input() textColor?: string;
  @Input() hoverBgColor?: string;
  @Input() borderColor?: string;

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

  get buttonStyle(): { [key: string]: string } {
    const styles: { [key: string]: string } = {};
    if (this.bgColor) styles['background-color'] = this.bgColor;
    if (this.textColor) styles['color'] = this.textColor;
    if (this.borderColor) styles['border-color'] = this.borderColor;
    return styles;
  }

  get sanitizedIconHtml(): SafeHtml {
    if (!this.iconName) return '';
    return this.sanitizer.bypassSecurityTrustHtml(this.iconName);
  }
}
