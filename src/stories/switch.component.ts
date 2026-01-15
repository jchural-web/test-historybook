import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostListener,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bsg-switch',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      type="button"
      role="switch"
      class="switch-root"
      [class.switch-checked]="checked"
      [class.switch-disabled]="disabled"
      [attr.aria-checked]="checked"
      [attr.aria-disabled]="disabled"
      [disabled]="disabled"
      (click)="toggle()"
      (keydown.space)="onKeydown($event)"
      (keydown.enter)="onKeydown($event)"
    >
      <span class="switch-track">
        <span class="switch-thumb"></span>
      </span>
    </button>
  `,
  styleUrls: ['./switch.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitchComponent {
  /**
   * Whether the switch is in the checked (on) state
   */
  @Input() checked: boolean = false;

  /**
   * Whether the switch is disabled and non-interactive
   */
  @Input() disabled: boolean = false;

  /**
   * Event emitted when the switch state changes
   */
  @Output() onChange = new EventEmitter<boolean>();

  /**
   * Toggle the switch state
   */
  toggle(): void {
    if (this.disabled) {
      return;
    }
    this.checked = !this.checked;
    this.onChange.emit(this.checked);
  }

  /**
   * Handle keyboard events (space and enter)
   */
  onKeydown(event: Event): void {
    const keyboardEvent = event as KeyboardEvent;
    if (this.disabled) {
      return;
    }
    // Prevent default to avoid page scroll on space
    keyboardEvent.preventDefault();
    this.toggle();
  }
}
