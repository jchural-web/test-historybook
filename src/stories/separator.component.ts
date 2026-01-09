import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type SeparatorOrientation = 'horizontal' | 'vertical';

@Component({
  selector: 'bsg-separator',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="separator"
      [ngClass]="separatorClasses"
      [attr.role]="'separator'"
      [attr.aria-orientation]="orientation"
    ></div>
  `,
  styleUrls: ['./separator.css'],
})
export class SeparatorComponent {
  /** Separator orientation */
  @Input() orientation: SeparatorOrientation = 'horizontal';

  /** Line thickness in pixels */
  @Input() thickness: number = 1;

  get separatorClasses(): string[] {
    return [`separator-${this.orientation}`];
  }
}
