import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'bsg-label',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span class="label">{{ text }}</span>
  `,
  styleUrls: ['./label.css'],
})
export class LabelComponent {
  /** Label text content */
  @Input() text = 'Etiqueta';
}
