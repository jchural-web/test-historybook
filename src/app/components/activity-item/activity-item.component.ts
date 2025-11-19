import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-activity-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './activity-item.component.html',
  styleUrls: ['./activity-item.component.css'],
})
export class ActivityItemComponent {
  @Input()
  text: string = 'Texto ejemplo de actividad';

  @Input()
  color: 'green' | 'yellow' | 'red' = 'green';

  public get classes(): string[] {
    return ['activity-item'];
  }

  public get barClasses(): string[] {
    return ['activity-bar', `activity-bar-${this.color}`];
  }
}
