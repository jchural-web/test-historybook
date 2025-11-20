import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

export type ButtonVariant =
  | 'default'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | 'destructive'
  | 'link'
  | 'icon-text'
  | 'ovalado'
  | 'button'
  | 'group'
  | 'rectangular-icon'
  | 'circular-icon';

@Component({
  selector: 'app-boton-maestro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './boton-maestro.component.html',
  styleUrls: ['./boton-maestro.component.css'],
})
export class BotonMaestroComponent {
  @Input() variant: ButtonVariant = 'default';
  @Input() text: string = '';
  @Input() icon: string = '';
  @Input() disabled: boolean = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  @Output() buttonClick = new EventEmitter<MouseEvent>();

  onClick(event: MouseEvent): void {
    if (!this.disabled) {
      this.buttonClick.emit(event);
    }
  }

  get buttonClasses(): string {
    const baseClasses = 'inline-flex items-center justify-center gap-2 font-medium text-[13px] leading-normal tracking-tight transition-all duration-150';
    const disabledClasses = this.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

    const variantClasses: Record<ButtonVariant, string> = {
      default: 'bg-[#6419E6] text-white rounded-[5px] px-[14px] py-[8px] hover:bg-[#5011BF] hover:underline',
      outline: 'bg-white text-[#161616] border border-[#E5E7EB] rounded-[5px] px-[9px] py-[9px] hover:bg-[#E5E7EB]',
      secondary: 'bg-[#F3F4F6] text-[#161616] border border-[#E5E7EB] rounded-[5px] px-[10px] py-[9px] hover:bg-[#E5E7EB]',
      ghost: 'bg-[#C084FC] text-white border border-[#8F5AF8] rounded-[5px] px-[12px] py-[9px] hover:bg-[#8F5AF8]',
      destructive: 'bg-[#FF0000] text-white rounded-[5px] px-[8px] py-[9px] hover:bg-[#E70000]',
      link: 'bg-transparent text-[#161616] hover:underline',
      'icon-text': 'bg-[#6419E6] text-white rounded-[5px] px-[14px] py-[9px] hover:bg-[#5011BF]',
      ovalado: 'bg-[#6419E6] text-white rounded-[17px] px-[13px] py-[3px] hover:bg-[#5011BF]',
      button: 'bg-white text-[#161616] border border-[#E5E7EB] rounded-[5px] px-[14px] py-[9px] hover:bg-[#E5E7EB]',
      group: 'bg-white text-[#161616] border border-[#E5E7EB] rounded-[5px] px-[14px] py-[9px] hover:bg-[#E5E7EB]',
      'rectangular-icon': 'bg-[#6419E6] text-white rounded-[5px] px-[10px] py-[6px] hover:bg-[#5011BF]',
      'circular-icon': 'bg-[#6419E6] text-white rounded-[17.143px] w-[35px] h-[34px] hover:bg-[#5011BF]',
    };

    return `${baseClasses} ${variantClasses[this.variant]} ${disabledClasses}`;
  }

  get iconSize(): number {
    if (this.variant === 'circular-icon') return 18;
    if (this.variant === 'rectangular-icon') return 20;
    if (this.variant === 'icon-text') return 16;
    if (this.variant === 'ovalado') return 18;
    return 20;
  }

  get showIcon(): boolean {
    return !!this.icon && ['icon-text', 'rectangular-icon', 'circular-icon', 'ovalado'].includes(this.variant);
  }

  get showText(): boolean {
    return !!this.text && !['rectangular-icon', 'circular-icon'].includes(this.variant);
  }
}
