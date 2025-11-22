import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export type DialogHeaderVariant = 'solid' | 'soft' | 'white';

@Component({
  selector: 'app-dialog-maestro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialog-maestro.component.html',
  styleUrls: ['./dialog-maestro.component.css'],
})
export class DialogMaestroComponent {
  @Input() headerVariant: DialogHeaderVariant = 'solid';
  @Input() headerColor: string = '#7C3AED';
  @Input() showBorderRadius: boolean = true;

  get dialogClasses(): string {
    const classes = ['dialog'];
    if (this.showBorderRadius) {
      classes.push('dialog-rounded');
    }
    return classes.join(' ');
  }

  get headerClasses(): string {
    const classes = ['dialog-header', `dialog-header-${this.headerVariant}`];
    return classes.join(' ');
  }

  get headerStyles(): { [key: string]: string } {
    const styles: { [key: string]: string } = {};

    if (this.headerVariant === 'solid') {
      styles['background-color'] = this.headerColor;
    } else if (this.headerVariant === 'soft') {
      styles['background-color'] = this.getSoftColor(this.headerColor);
    }

    return styles;
  }

  private getSoftColor(hexColor: string): string {
    // Convierte el color hex a una versión más clara (soft)
    // Si el color es #7C3AED, devuelve una versión clara con opacidad
    try {
      const hex = hexColor.replace('#', '');
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);

      // Crea una versión clara del color (más cerca del blanco)
      const lightR = Math.round(r + (255 - r) * 0.85);
      const lightG = Math.round(g + (255 - g) * 0.85);
      const lightB = Math.round(b + (255 - b) * 0.85);

      return `rgb(${lightR}, ${lightG}, ${lightB})`;
    } catch (error) {
      // Si hay error, retorna un gris claro
      return '#F5F5F5';
    }
  }
}
