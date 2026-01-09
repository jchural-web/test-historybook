import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';

export type AccordionSize = 'sm' | 'md' | 'lg';
export type AccordionVariant = 'default' | 'table-actions' | 'table-basic' | 'table-tabs' | 'list-content';

export interface AccordionItem {
  id: string;
  title: string;
  headerAction?: { label: string; variant?: string; size?: string };
  expanded?: boolean;
  // Table variant inputs
  tableVariant?: 'table-actions' | 'table-basic' | 'table-tabs' | 'list-content';
  tableColumns?: Array<{ key: string; label: string; width?: string }>;
  tableRows?: Array<any>;
  tablePagination?: any;
  showActionsColumn?: boolean;
  listItems?: Array<{ text: string }>;
  tabs?: Array<any>;
  activeTabIndex?: number;
  tabsPagination?: Array<any>;
}

@Component({
  selector: 'bsg-accordion',
  standalone: true,
  imports: [CommonModule, TableComponent],
  template: `
    <div class="accordion-container" [ngClass]="containerClasses">
      <div *ngFor="let item of items; let i = index" class="accordion-item">
        <!-- Accordion Header -->
        <button
          type="button"
          class="accordion-header"
          [ngClass]="getHeaderClasses(i)"
          (click)="toggleItem(i)"
          [attr.aria-expanded]="isItemExpanded(i)"
          [attr.aria-controls]="'accordion-content-' + item.id"
        >
          <!-- Title (left side) -->
          <span class="accordion-title">{{ item.title }}</span>

          <!-- Chevron Icon (right side) -->
          <svg
            class="accordion-chevron"
            [ngClass]="{ 'accordion-chevron-open': isItemExpanded(i) }"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.3691 8.22462C11.7618 7.90427 12.3408 7.92686 12.707 8.29298L18.707 14.293C19.0975 14.6835 19.0975 15.3165 18.707 15.707C18.3164 16.0976 17.6834 16.0976 17.2929 15.707L11.9999 10.4141L6.70696 15.707C6.31643 16.0976 5.68342 16.0976 5.29289 15.707C4.90237 15.3165 4.90237 14.6835 5.29289 14.293L11.2929 8.29298L11.3691 8.22462Z"
              fill="currentColor"
            />
          </svg>
        </button>

        <!-- Accordion Content (expandable) -->
        <div
          *ngIf="isItemExpanded(i)"
          class="accordion-content"
          [attr.id]="'accordion-content-' + item.id"
          role="region"
          [attr.aria-labelledby]="'accordion-header-' + item.id"
        >
          <!-- Render Table Component if table variant is specified -->
          <div class="accordion-body">
            <bsg-table
              *ngIf="item.tableVariant"
              [title]="item.title"
              [variant]="item.tableVariant"
              [tableColumns]="item.tableColumns || []"
              [tableRows]="item.tableRows || []"
              [tablePagination]="item.tablePagination"
              [showActionsColumn]="item.showActionsColumn"
              [listItems]="item.listItems"
              [tabs]="item.tabs"
              [activeTabIndex]="item.activeTabIndex || 0"
              [tabsPagination]="item.tabsPagination"
              [headerAction]="item.headerAction"
            ></bsg-table>
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

  /** Accordion size */
  @Input() size: AccordionSize = 'md';

  /** Accordion variant */
  @Input() variant: AccordionVariant = 'default';

  /** Event emitted when accordion item is toggled */
  @Output() itemToggle = new EventEmitter<{ itemIndex: number; expanded: boolean }>();

  private expandedIndices: Set<number> = new Set();

  get containerClasses(): string[] {
    return [`accordion-size-${this.size}`, `accordion-variant-${this.variant}`];
  }

  getHeaderClasses(index: number): string[] {
    const classes = ['accordion-header-button'];
    if (this.isItemExpanded(index)) {
      classes.push('accordion-header-expanded');
    }
    return classes;
  }

  isItemExpanded(index: number): boolean {
    // Check if item has expanded property set, otherwise use internal state
    const item = this.items[index];
    if (item?.expanded !== undefined) {
      return item.expanded;
    }
    return this.expandedIndices.has(index);
  }

  toggleItem(index: number): void {
    const item = this.items[index];
    const isCurrentlyExpanded = this.isItemExpanded(index);

    if (isCurrentlyExpanded) {
      this.expandedIndices.delete(index);
      if (item) {
        item.expanded = false;
      }
    } else {
      this.expandedIndices.add(index);
      if (item) {
        item.expanded = true;
      }
    }

    this.itemToggle.emit({ itemIndex: index, expanded: this.isItemExpanded(index) });
  }
}
