import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

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
  selector: 'app-prueba-de-uso',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prueba-de-uso.component.html',
  styleUrls: ['./prueba-de-uso.component.css'],
})
export class PruebaDeUsoComponent {
  @Input() label: string = 'Default';
  @Input() variant: ButtonVariant = 'default';
  @Input() iconName?: string;
  @Input() showIcon: boolean = false;
  @Input() disabled: boolean = false;

  @Output() clicked = new EventEmitter<MouseEvent>();

  onClick(event: MouseEvent): void {
    if (!this.disabled) {
      this.clicked.emit(event);
    }
  }

  get buttonClasses(): string {
    const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-150 outline-none focus:outline-none';
    const fontClasses = 'font-inter text-[13px] leading-normal tracking-[-0.26px]';
    
    const variantClasses: Record<ButtonVariant, string> = {
      default: 'bg-purple-600 text-white rounded-md px-4 py-2 hover:bg-purple-700 hover:underline',
      outline: 'border border-gray-400 text-gray-700 bg-white rounded-md px-4 py-2 hover:border-gray-600 hover:bg-gray-100 hover:underline',
      secondary: 'bg-gray-200 text-gray-700 rounded-md px-4 py-2 hover:bg-gray-300 hover:underline',
      ghost: 'bg-transparent text-purple-600 rounded-md px-4 py-2 hover:bg-purple-50 hover:underline',
      destructive: 'bg-red-500 text-white rounded-md px-4 py-2 hover:bg-red-600 hover:underline',
      link: 'bg-transparent text-purple-600 underline-offset-2 px-4 py-2 hover:underline',
      'icono-circular': 'rounded-full bg-purple-600 p-2 text-white hover:bg-purple-700',
      'icono-cuadrado': 'rounded-md bg-purple-600 p-2 text-white hover:bg-purple-700',
      ovalado: 'rounded-full bg-purple-600 text-white px-5 py-2 hover:bg-purple-700 hover:underline',
      pagination: 'border border-gray-300 bg-white text-gray-900 px-3 py-2 rounded-md hover:bg-gray-100 hover:underline',
    };

    const disabledClasses = this.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

    return `${baseClasses} ${fontClasses} ${variantClasses[this.variant]} ${disabledClasses}`;
  }

  get iconClasses(): string {
    const iconSize = this.variant === 'icono-circular' || this.variant === 'icono-cuadrado' ? 'w-5 h-5' : 'w-4 h-4';
    const iconMargin = this.label && (this.variant !== 'icono-circular' && this.variant !== 'icono-cuadrado') ? 'mr-2' : '';
    return `${iconSize} ${iconMargin}`;
  }
}
