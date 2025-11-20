import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TagPillComponent } from '../tag-pill/tag-pill.component';

@Component({
  selector: 'app-oportunidad',
  standalone: true,
  imports: [CommonModule, TagPillComponent],
  templateUrl: './oportunidad.component.html',
  styleUrls: ['./oportunidad.component.css'],
})
export class OportunidadComponent {
  @Input()
  etiqueta: string = 'Alta';

  @Input()
  nombre: string = 'Carlos Mendoza';

  @Input()
  programa: string = 'LEAN SSSB ONLINE 2024 II LIMA';

  @Input()
  fase: string = 'BNC';

  @Input()
  categoria: string = 'Facebook Chat';

  @Input()
  categoriaColor: string = '#2563EB';

  public get tagColor(): 'green' | 'orange' | 'red' | 'blue' | 'teal' | 'purple' {
    const etiquetaLower = this.etiqueta.toLowerCase();
    if (etiquetaLower.includes('alta')) return 'green';
    if (etiquetaLower.includes('media')) return 'orange';
    if (etiquetaLower.includes('baja')) return 'red';
    return 'blue';
  }
}
