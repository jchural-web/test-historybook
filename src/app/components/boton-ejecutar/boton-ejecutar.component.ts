import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boton-ejecutar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './boton-ejecutar.component.html',
  styleUrls: ['./boton-ejecutar.component.css'],
})
export class BotonEjecutarComponent {
  @Input()
  label: string = 'Ejecutar';

  @Input()
  color: 'green' | 'yellow' | 'red' = 'green';

  public get classes(): string[] {
    return ['boton-ejecutar', `boton-ejecutar-${this.color}`];
  }
}
