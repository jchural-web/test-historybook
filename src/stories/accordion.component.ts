import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';

export type AccordionSize = 'sm' | 'md' | 'lg';
export type AccordionVariant =
  | 'default'
  | 'table-actions'
  | 'table-basic'
  | 'table-tabs'
  | 'list-content';

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
        <!-- Render Table Component with collapsible mode -->
        <bsg-table
          *ngIf="item.tableVariant"
          [title]="item.title"
          [variant]="item.tableVariant"
          [isCollapsible]="true"
          [isExpanded]="isItemExpanded(i)"
          (collapseToggle)="toggleItem(i)"
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
