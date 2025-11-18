import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation-tabs.component.html',
  styleUrls: ['./navigation-tabs.component.css'],
})
export class NavigationTabsComponent {
  @Input()
  label: string = 'Tab navegación';

  @Input()
  count: number = 1;

  @Input()
  color: 'blue' | 'green' | 'orange' | 'gray' = 'blue';

  @Input()
  variant: 'solid' | 'soft' = 'solid';

  @Input()
  isActive: boolean = true;

  @Input()
  disabled: boolean = false;

  @Output()
  clicked = new EventEmitter<void>();

  public get classes(): string[] {
    const classes = ['tab-container'];

    if (this.disabled) {
      classes.push('tab-disabled');
    } else if (this.variant === 'solid') {
      classes.push(`tab-solid-${this.color}`);
    } else {
      classes.push(`tab-soft-${this.color}`);
    }

    return classes;
  }

  public get badgeClasses(): string[] {
    const classes = ['badge'];

    if (this.disabled) {
      classes.push('badge-disabled');
    } else {
      classes.push(`badge-${this.color}`);
    }

    return classes;
  }

  public get countClasses(): string[] {
    const classes = ['count'];

    if (this.disabled) {
      classes.push('count-disabled');
    } else {
      classes.push(`count-${this.color}`);
    }

    return classes;
  }

  public handleClick(): void {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }
}
