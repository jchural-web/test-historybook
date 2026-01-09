import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export type AccordionMode = 'single' | 'multiple';
export type AccordionSize = 'sm' | 'md' | 'lg';

export interface AccordionItem {
  id: string;
  title: string;
  content: string;
  disabled?: boolean;
}

@Component({
  selector: 'bsg-accordion',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="accordion" [ngClass]="accordionClasses">
      <div
        *ngFor="let item of items; let i = index"
        class="accordion-item"
        [ngClass]="{ 'accordion-item-disabled': item.disabled }"
      >
        <!-- Accordion Header (Button) -->
        <button
          type="button"
          class="accordion-header"
          [ngClass]="getHeaderClasses(item.id)"
          [disabled]="item.disabled"
          (click)="toggleItem(item.id)"
          [attr.aria-expanded]="isItemExpanded(item.id)"
          [attr.aria-controls]="'accordion-panel-' + item.id"
        >
          <!-- Chevron Icon -->
          <svg
            class="accordion-chevron"
            [ngClass]="{ 'accordion-chevron-open': isItemExpanded(item.id) }"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.625 7.5L10 13.125L4.375 7.5"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <!-- Title -->
          <span class="accordion-title">{{ item.title }}</span>
        </button>

        <!-- Accordion Content (Panel) -->
        <div
          *ngIf="isItemExpanded(item.id)"
          class="accordion-panel"
          [attr.id]="'accordion-panel-' + item.id"
          role="region"
          [attr.aria-labelledby]="'accordion-header-' + item.id"
        >
          <div class="accordion-content">
            {{ item.content }}
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./accordion.css'],
})
export class AccordionComponent {
  /** Accordion items */
  @Input() items: AccordionItem[] = [];

  /** Accordion mode: single (only one item open) or multiple (multiple items open) */
  @Input() mode: AccordionMode = 'single';

  /** Accordion size */
  @Input() size: AccordionSize = 'md';

  /** Initially expanded item IDs */
  @Input() set expandedItems(ids: string[]) {
    this.expandedItemIds = new Set(ids);
  }

  /** Event emitted when accordion item is toggled */
  @Output() itemToggle = new EventEmitter<{ itemId: string; expanded: boolean }>();

  private expandedItemIds: Set<string> = new Set();

  get accordionClasses(): string[] {
    return [`accordion-size-${this.size}`, `accordion-mode-${this.mode}`];
  }

  getHeaderClasses(itemId: string): string[] {
    const classes = ['accordion-header-button'];
    if (this.isItemExpanded(itemId)) {
      classes.push('accordion-header-expanded');
    }
    return classes;
  }

  isItemExpanded(itemId: string): boolean {
    return this.expandedItemIds.has(itemId);
  }

  toggleItem(itemId: string): void {
    const item = this.items.find((i) => i.id === itemId);
    if (item?.disabled) {
      return;
    }

    const isCurrentlyExpanded = this.expandedItemIds.has(itemId);

    if (this.mode === 'single') {
      // In single mode, close all other items
      this.expandedItemIds.clear();
      if (!isCurrentlyExpanded) {
        this.expandedItemIds.add(itemId);
      }
    } else {
      // In multiple mode, toggle the current item
      if (isCurrentlyExpanded) {
        this.expandedItemIds.delete(itemId);
      } else {
        this.expandedItemIds.add(itemId);
      }
    }

    this.itemToggle.emit({ itemId, expanded: this.isItemExpanded(itemId) });
  }
}
