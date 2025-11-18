import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tag-pill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tag-pill.component.html',
  styleUrls: ['./tag-pill.component.css'],
})
export class TagPillComponent {
  @Input()
  label: string = 'Etiqueta';

  @Input()
  color: 'green' | 'orange' | 'red' | 'blue' | 'teal' | 'purple' = 'green';

  @Input()
  icon?: string;

  @Input()
  size: 'sm' | 'md' = 'sm';

  public get classes(): string[] {
    return ['tag-pill', `tag-pill-${this.color}`, `tag-pill-${this.size}`];
  }

  public get iconClasses(): string[] {
    return ['tag-icon', `tag-icon-${this.color}`];
  }
}
