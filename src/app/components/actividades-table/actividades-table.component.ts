import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OportunidadComponent } from '../oportunidad/oportunidad.component';
import { TagPillComponent } from '../tag-pill/tag-pill.component';
import { ActivityItemComponent } from '../activity-item/activity-item.component';
import { BotonMaestroComponent } from '../boton-maestro/boton-maestro.component';

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
  imports: [CommonModule, OportunidadComponent, TagPillComponent, ActivityItemComponent, BotonMaestroComponent],
  templateUrl: './actividades-table.component.html',
  styleUrls: ['./actividades-table.component.css'],
})
export class ActividadesTableComponent {
  @Input()
  headerColor: string = '#E3F2FD';

  @Input()
  rows: ActividadRow[] = [];

  @Output()
  executeButtonClick = new EventEmitter<ActividadRow>();

  getMensajeEtiquetaColor(
    etiqueta?: string,
  ): 'green' | 'orange' | 'red' | 'blue' | 'teal' | 'purple' {
    if (!etiqueta) return 'blue';
    const etiquetaLower = etiqueta.toLowerCase();
    if (etiquetaLower.includes('whatsapp')) return 'green';
    if (etiquetaLower.includes('portal')) return 'red';
    if (etiquetaLower.includes('correo')) return 'blue';
    if (etiquetaLower.includes('seguimiento')) return 'purple';
    return 'blue';
  }

  getBotonColor(color?: 'green' | 'yellow' | 'red'): string {
    if (color === 'green') return '#22C55E';
    if (color === 'yellow') return '#FBBF24';
    if (color === 'red') return '#EF4444';
    return '#22C55E';
  }

  getPlayIconSvg(): string {
    return `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_76_283)">
<path d="M12.25 7.00004C12.25 4.10055 9.89954 1.75004 7.00004 1.75004C4.10055 1.75004 1.75004 4.10055 1.75004 7.00004C1.75004 9.89954 4.10055 12.25 7.00004 12.25C9.89954 12.25 12.25 9.89954 12.25 7.00004ZM8.75004 6.99947L5.83508 5.25118L5.83337 5.25004V8.75004L5.83508 8.7489L8.75004 7.00061L8.75118 7.00004L8.75004 6.99947ZM9.91557 7.07581C9.90414 7.25151 9.85305 7.42288 9.76575 7.57654C9.66616 7.75179 9.52234 7.89755 9.34933 8.00094L9.34989 8.00151L6.43494 9.7498L6.43437 9.74923C6.25749 9.85562 6.05574 9.91386 5.84932 9.91671C5.64229 9.91954 5.43815 9.86727 5.25802 9.76518C5.07781 9.66302 4.92785 9.51428 4.82393 9.33508C4.72014 9.15599 4.6659 8.95248 4.66671 8.74548V5.25175C4.6664 5.04533 4.7208 4.84237 4.8245 4.66386C4.9285 4.48486 5.07844 4.33691 5.25859 4.2349C5.43875 4.13289 5.64288 4.08046 5.84989 4.08337C6.05607 4.08629 6.25767 4.14407 6.43437 4.25029H6.43494L9.34876 5.99801L9.41199 6.03845C9.55721 6.13824 9.67837 6.26978 9.76575 6.42354C9.86555 6.59922 9.91785 6.798 9.91785 7.00004L9.91557 7.07581ZM13.4167 7.00004C13.4167 10.5439 10.5439 13.4167 7.00004 13.4167C3.45621 13.4167 0.583374 10.5439 0.583374 7.00004C0.583374 3.45621 3.45621 0.583374 7.00004 0.583374C10.5439 0.583374 13.4167 3.45621 13.4167 7.00004Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_76_283">
<rect width="14" height="14" fill="white"/>
</clipPath>
</defs>
</svg>`;
  }
}
