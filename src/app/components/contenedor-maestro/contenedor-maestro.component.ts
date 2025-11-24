import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconSlotComponent } from '../icon-slot/icon-slot.component';

export type ContenedorMaestroVariant =
  | 'simple'
  | 'tabla'
  | 'blanco'
  | 'tabla-items'
  | 'tabla-items-leyenda';

@Component({
  selector: 'app-contenedor-maestro',
  standalone: true,
  imports: [CommonModule, IconSlotComponent],
  templateUrl: './contenedor-maestro.component.html',
  styleUrls: ['./contenedor-maestro.component.css'],
})
export class ContenedorMaestroComponent {
  @Input() variant: ContenedorMaestroVariant = 'simple';
  @Input() title?: string;
  @Input() iconName?: string;
  @Input() headerBgColor: string = '#E3F2FD';
  @Input() headerTextColor: string = '#111827';
  @Input() width?: string;
  @Input() height?: string;

  get containerStyle(): { [key: string]: string } {
    const style: { [key: string]: string } = {};
    if (this.width) style['width'] = this.width;
    if (this.height) style['height'] = this.height;
    return style;
  }

  get headerStyle(): { [key: string]: string } {
    return {
      'background-color': this.headerBgColor,
      'color': this.headerTextColor,
    };
  }

  get showHeader(): boolean {
    return this.variant !== 'blanco';
  }

  get showTableHeader(): boolean {
    return this.variant === 'tabla-items' || this.variant === 'tabla-items-leyenda';
  }

  get showLeyenda(): boolean {
    return this.variant === 'tabla-items-leyenda';
  }
}
