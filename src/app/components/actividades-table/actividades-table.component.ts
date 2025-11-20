import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { OportunidadComponent } from '../oportunidad/oportunidad.component';
import { TagPillComponent } from '../tag-pill/tag-pill.component';
import { BotonEjecutarComponent } from '../boton-ejecutar/boton-ejecutar.component';
import { ActivityItemComponent } from '../activity-item/activity-item.component';

export interface ActividadRow {
  actividad: string;
  oportunidad: any;
  mensajeEtiqueta?: string;
  mensajeTexto: string;
  fecha: string;
  hora?: string;
  estadoEtiqueta?: string;
  indicadorColor?: 'green' | 'yellow' | 'red';
  botonEjecutar?: {
    label: string;
    color: 'green' | 'yellow' | 'red';
  };
}

@Component({
  selector: 'app-actividades-table',
  standalone: true,
  imports: [CommonModule, OportunidadComponent, TagPillComponent, BotonEjecutarComponent],
  templateUrl: './actividades-table.component.html',
  styleUrls: ['./actividades-table.component.css'],
})
export class ActividadesTableComponent {
  @Input()
  headerColor: string = '#E3F2FD';

  @Input()
  rows: ActividadRow[] = [];

  getMensajeEtiquetaColor(etiqueta?: string): 'green' | 'orange' | 'red' | 'blue' | 'teal' | 'purple' {
    if (!etiqueta) return 'blue';
    const etiquetaLower = etiqueta.toLowerCase();
    if (etiquetaLower.includes('whatsapp')) return 'green';
    if (etiquetaLower.includes('portal')) return 'red';
    if (etiquetaLower.includes('correo')) return 'blue';
    if (etiquetaLower.includes('seguimiento')) return 'purple';
    return 'blue';
  }
}
