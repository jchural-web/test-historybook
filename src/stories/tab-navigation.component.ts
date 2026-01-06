import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export type TabSize = 'sm' | 'md' | 'lg';
export type TabVariant = 'text' | 'icon-text';
export type TabState = 'default' | 'hover' | 'active' | 'focus' | 'disabled';
export type TabColor = 'blue' | 'green' | 'yellow';

export interface TabItem {
  label: string;
  count?: number;
  icon?: boolean; // Whether to show icon (for icon-text variant)
}

@Component({
  selector: 'storybook-tab-navigation',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="tab-navigation" [ngClass]="navigationClasses" [attr.role]="'tablist'">
      <button
        *ngFor="let tab of tabs; let i = index"
        type="button"
        class="tab-item"
        [ngClass]="getTabClasses(i)"
        [attr.role]="'tab'"
        [attr.aria-selected]="i === activeIndex"
        [attr.aria-controls]="'tabpanel-' + i"
        [disabled]="state === 'disabled'"
        (click)="handleTabClick(i)"
      >
        <!-- Icon-text variant -->
        <div *ngIf="variant === 'icon-text'" class="tab-icon-content">
          <div class="tab-icon-circle">
            <svg
              class="tab-icon-svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 21V19C19 17.9391 18.5786 16.9217 17.8284 16.1716C17.0783 15.4214 16.0609 15 15 15H9C7.93913 15 6.92172 15.4214 6.17157 16.1716C5.42143 16.9217 5 17.9391 5 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                [attr.stroke]="getIconStroke(i)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <span class="tab-label">{{ tab.label }}</span>
        </div>

        <!-- Text variant -->
        <span *ngIf="variant === 'text'" class="tab-text-content">
          {{ tab.label }}<span *ngIf="tab.count !== undefined"> ({{ tab.count }})</span>
        </span>
      </button>
    </div>
  `,
  styleUrls: ['./tab-navigation.css'],
})
export class TabNavigationComponent {
  /** Tab size */
  @Input() size: TabSize = 'md';

  /** Tab variant */
  @Input() variant: TabVariant = 'text';

  /** Tab state */
  @Input() state: TabState = 'default';

  /** Tab color variant */
  @Input() color: TabColor = 'blue';

  /** List of tabs */
  @Input() tabs: TabItem[] = [
    { label: 'Solicitudes Realizadas', count: 3 },
    { label: 'Información del cliente' },
  ];

  /** Active tab index */
  @Input() activeIndex: number = 0;

  /** Tab change event emitter */
  @Output() onTabChange = new EventEmitter<number>();

  get navigationClasses(): string[] {
    return [
      `tab-navigation-${this.size}`,
      `tab-navigation-${this.variant}`,
      `tab-navigation-state-${this.state}`,
      `tab-navigation-color-${this.color}`,
    ];
  }

  getTabClasses(index: number): string[] {
    const classes = [
      `tab-item-${this.size}`,
      `tab-item-${this.variant}`,
      `tab-item-color-${this.color}`,
    ];

    if (index === this.activeIndex) {
      classes.push('tab-item-active');
    } else {
      classes.push(`tab-item-${this.state}`);
    }

    return classes;
  }

  getIconStroke(index: number): string {
    if (index === this.activeIndex) {
      return 'white';
    }
    // Return color-specific stroke values
    const strokeMap: Record<TabColor, string> = {
      blue: '#2563EB', // Blue-600
      green: '#16A34A', // Green-600
      yellow: '#CA8A04', // Yellow-600
    };
    return strokeMap[this.color];
  }

  handleTabClick(index: number): void {
    if (this.state !== 'disabled' && index !== this.activeIndex) {
      this.onTabChange.emit(index);
    }
  }
}
