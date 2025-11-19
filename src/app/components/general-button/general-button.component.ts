import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-general-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './general-button.component.html',
  styleUrls: ['./general-button.component.css'],
})
export class GeneralButtonComponent {
  @Input()
  label: string = 'Botón';

  @Input()
  color: 'white' | 'green' | 'purple' | 'orange' | 'blue' = 'green';

  public get classes(): string[] {
    return ['general-button', `general-button-${this.color}`];
  }
}
