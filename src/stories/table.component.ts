import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabNavigationComponent, TabItem } from './tab-navigation.component';
import { PaginationComponent } from './pagination.component';
import { SeparatorComponent } from './separator.component';
import { LabelComponent } from './label.component';
import { ButtonComponent, ButtonVariant, ButtonSize } from './button.component';
import { BadgeComponent } from './badge.component';

export type TableVariant = 'table-actions' | 'table-basic' | 'table-tabs' | 'list-content';

export interface TableColumn {
  key: string;
  label: string;
  width?: string;
}

export interface TableRow {
  [key: string]: any;
}

export interface ListItem {
  text: string;
}

export interface TabConfig extends TabItem {
  tableData?: {
    columns: TableColumn[];
    rows: TableRow[];
  };
}

export interface TableAction {
  label: string;
  variant?: 'approve' | 'reject' | 'view';
  onClick?: () => void;
}

@Component({
  selector: 'bsg-table',
  standalone: true,
  imports: [
    CommonModule,
    TabNavigationComponent,
    PaginationComponent,
    SeparatorComponent,
    LabelComponent,
    ButtonComponent,
    BadgeComponent,
  ],
  template: `
    <div class="table" [ngClass]="containerClasses">
      <!-- Header -->
      <div class="table-header" [ngClass]="{ 'table-header-collapsible': isCollapsible }">
        <!-- Icon -->
        <div class="table-icon" *ngIf="!isCollapsible">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="14" cy="14" r="14" fill="#2563EB" />
          </svg>
          <svg
            class="table-check-icon"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_check)">
              <path
                d="M6.43155 0.706459C7.98492 0.461733 9.5751 0.757369 10.9372 1.54325C11.2361 1.71571 11.339 2.09758 11.1667 2.39652C10.9942 2.6955 10.6118 2.79791 10.3128 2.6254C9.19841 1.98244 7.89713 1.74102 6.62625 1.9412C5.35534 2.14143 4.19126 2.77142 3.32852 3.72587C2.4658 4.68036 1.95624 5.90193 1.88504 7.18656C1.81386 8.47123 2.18527 9.74182 2.93729 10.7858C3.6893 11.8297 4.77673 12.5845 6.01773 12.9239C7.25873 13.2632 8.57877 13.167 9.75736 12.651C10.936 12.1351 11.9023 11.2303 12.4948 10.0882C13.0872 8.94613 13.2698 7.63546 13.013 6.37479C12.9441 6.03664 13.1625 5.7065 13.5006 5.63749C13.8389 5.56857 14.169 5.78696 14.2379 6.12516C14.5519 7.66605 14.328 9.26786 13.6038 10.6637C12.8796 12.0596 11.699 13.1654 10.2585 13.7961C8.818 14.4266 7.20487 14.5441 5.68814 14.1293C4.17132 13.7145 2.84201 12.7923 1.92288 11.5164C1.00377 10.2404 0.549897 8.68771 0.636872 7.11759C0.72387 5.54744 1.34693 4.05449 2.4014 2.88786C3.45585 1.7213 4.87821 0.951184 6.43155 0.706459ZM13.3084 2.05778C13.5525 1.81398 13.9482 1.81382 14.1922 2.05778C14.4362 2.30185 14.4362 2.6981 14.1922 2.94218L7.94217 9.19218C7.69818 9.43613 7.30247 9.43597 7.05838 9.19218L5.18338 7.31718C4.9393 7.0731 4.9393 6.67686 5.18338 6.43278C5.42747 6.18898 5.82318 6.18882 6.06717 6.43278L7.50028 7.86588L13.3084 2.05778Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_check">
                <rect width="15" height="15" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>

        <!-- Title -->
        <h2 class="table-title">{{ title }}</h2>

        <!-- Header Actions (e.g., "Nuevo mensaje" button) -->
        <div class="table-header-actions" *ngIf="headerAction && !isCollapsible">
          <bsg-button
            [label]="headerAction.label"
            [variant]="getHeaderActionVariant()"
            [size]="getHeaderActionSize()"
            (onClick)="onHeaderAction()"
          ></bsg-button>
        </div>

        <!-- Chevron Icon for Collapsible Mode (right side) -->
        <button
          *ngIf="isCollapsible"
          type="button"
          class="table-collapse-chevron"
          [ngClass]="{ 'table-chevron-expanded': isExpanded }"
          (click)="toggleCollapse()"
          [attr.aria-expanded]="isExpanded"
          [attr.aria-label]="isExpanded ? 'Contraer' : 'Expandir'"
        >
          <svg
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
      </div>

      <!-- Body -->
      <div class="table-body">
        <!-- Table Variants (table-basic, table-actions) -->
        <div *ngIf="variant === 'table-basic' || variant === 'table-actions'" class="table-content">
          <!-- Table Header -->
          <div class="table-content-header">
            <div
              *ngFor="let column of tableColumns"
              class="table-header-cell"
              [style.width]="column.width || 'auto'"
            >
              {{ column.label }}
            </div>
            <div
              *ngIf="variant === 'table-actions' && showActionsColumn"
              class="table-header-cell table-actions-header"
              [style.width]="actionsColumnWidth || 'auto'"
            >
              {{ actionsColumnLabel || 'Acciones' }}
            </div>
          </div>

          <bsg-separator></bsg-separator>

          <!-- Table Rows -->
          <div class="table-content-body">
            <div *ngFor="let row of tableRows; let i = index" class="table-row">
              <div
                *ngFor="let column of tableColumns"
                class="table-cell"
                [style.width]="column.width || 'auto'"
              >
                <!-- Render badge if specified -->
                <bsg-badge
                  *ngIf="row[column.key + '_badge']"
                  [variant]="row[column.key + '_badge_variant'] || 'default'"
                  [value]="row[column.key]"
                  [size]="row[column.key + '_badge_size'] || 'default'"
                ></bsg-badge>

                <!-- Render label if specified -->
                <bsg-label
                  *ngIf="row[column.key + '_label'] && !row[column.key + '_badge']"
                  [text]="row[column.key]"
                ></bsg-label>

                <!-- Render plain text otherwise -->
                <span *ngIf="!row[column.key + '_label'] && !row[column.key + '_badge']">{{
                  row[column.key]
                }}</span>
              </div>

              <!-- Actions Column (for table-actions variant) -->
              <div
                *ngIf="variant === 'table-actions' && row['actions']"
                class="table-cell table-actions-cell"
                [style.width]="actionsColumnWidth || 'auto'"
              >
                <div class="table-actions">
                  <bsg-button
                    *ngFor="let action of row['actions']"
                    [label]="action.label"
                    [variant]="getActionVariant(action.variant)"
                    [size]="'md'"
                    [shape]="'rectangular'"
                    (onClick)="onRowAction(i, action)"
                    class="table-action-btn"
                  ></bsg-button>
                </div>
              </div>
            </div>
          </div>

          <!-- Pagination -->
          <div class="table-pagination" *ngIf="tablePagination">
            <bsg-separator></bsg-separator>
            <bsg-pagination
              [currentPage]="tablePagination.currentPage"
              [totalPages]="tablePagination.totalPages"
              [pageSize]="tablePagination.pageSize"
              [pageSizeOptions]="tablePagination.pageSizeOptions"
              [totalItems]="tablePagination.totalItems"
              [rangeLabel]="tablePagination.rangeLabel"
              (pageChange)="onTablePageChange($event)"
              (pageSizeChange)="onTablePageSizeChange($event)"
              (refresh)="onTableRefresh()"
            ></bsg-pagination>
          </div>
        </div>

        <!-- List Variant (list-content) -->
        <div *ngIf="variant === 'list-content'" class="table-list">
          <div *ngFor="let item of listItems; let i = index" class="table-list-item">
            <div class="table-list-number">
              <svg
                width="27"
                height="26"
                viewBox="0 0 27 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse cx="13.5" cy="13" rx="13.5" ry="13" fill="#2563EB" />
              </svg>
              <span class="table-list-number-text">{{ i + 1 }}</span>
            </div>
            <div class="table-list-text">{{ item.text }}</div>
          </div>
        </div>

        <!-- Tabs Variant (table-tabs) -->
        <div *ngIf="variant === 'table-tabs'" class="table-tabs-wrapper">
          <!-- Tab Navigation -->
          <bsg-tab-navigation
            [tabs]="tabs"
            [activeIndex]="activeTabIndex"
            [size]="'md'"
            [variant]="'text'"
            (onTabChange)="onTabChange($event)"
          ></bsg-tab-navigation>

          <!-- Tab Content -->
          <div class="table-tab-content">
            <div *ngFor="let tab of tabs; let i = index">
              <div *ngIf="i === activeTabIndex && tab.tableData" class="table-content">
                <!-- Table Header -->
                <div class="table-content-header">
                  <div
                    *ngFor="let column of tab.tableData.columns"
                    class="table-header-cell"
                    [style.width]="column.width || 'auto'"
                  >
                    {{ column.label }}
                  </div>
                </div>

                <bsg-separator></bsg-separator>

                <!-- Table Rows -->
                <div class="table-content-body">
                  <div *ngFor="let row of tab.tableData.rows" class="table-row">
                    <div
                      *ngFor="let column of tab.tableData.columns"
                      class="table-cell"
                      [style.width]="column.width || 'auto'"
                    >
                      <!-- Render badge if specified -->
                      <bsg-badge
                        *ngIf="row[column.key + '_badge']"
                        [variant]="row[column.key + '_badge_variant'] || 'default'"
                        [value]="row[column.key]"
                        [size]="row[column.key + '_badge_size'] || 'default'"
                      ></bsg-badge>

                      <!-- Render label if specified -->
                      <bsg-label
                        *ngIf="row[column.key + '_label'] && !row[column.key + '_badge']"
                        [text]="row[column.key]"
                      ></bsg-label>

                      <!-- Render plain text otherwise -->
                      <span *ngIf="!row[column.key + '_label'] && !row[column.key + '_badge']">{{
                        row[column.key]
                      }}</span>
                    </div>
                  </div>
                </div>

                <!-- Pagination for this tab -->
                <div class="table-pagination" *ngIf="tabsPagination && tabsPagination[i]">
                  <bsg-separator></bsg-separator>
                  <bsg-pagination
                    [currentPage]="tabsPagination[i].currentPage"
                    [totalPages]="tabsPagination[i].totalPages"
                    [pageSize]="tabsPagination[i].pageSize"
                    [pageSizeOptions]="tabsPagination[i].pageSizeOptions"
                    [totalItems]="tabsPagination[i].totalItems"
                    [rangeLabel]="tabsPagination[i].rangeLabel"
                    (pageChange)="onTabPageChange(i, $event)"
                    (pageSizeChange)="onTabPageSizeChange(i, $event)"
                    (refresh)="onTabRefresh(i)"
                  ></bsg-pagination>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./table.css'],
})
export class TableComponent {
  /** Container title */
  @Input() title: string = 'Título del Contenedor';

  /** Display variant */
  @Input() variant: TableVariant = 'table-basic';

  /** Header action button (e.g., "Nuevo mensaje") */
  @Input() headerAction?: { label: string; variant?: string; size?: string };

  // Collapsible mode inputs
  @Input() isCollapsible: boolean = false;
  @Input() isExpanded: boolean = true;

  // Table variant inputs
  @Input() tableColumns: TableColumn[] = [];
  @Input() tableRows: TableRow[] = [];
  @Input() tablePagination?: {
    currentPage: number;
    totalPages: number;
    pageSize: number;
    pageSizeOptions: number[];
    totalItems: number;
    rangeLabel: string;
  };

  // Table-actions specific
  @Input() showActionsColumn: boolean = true;
  @Input() actionsColumnLabel: string = 'Acciones';
  @Input() actionsColumnWidth: string = '200px';

  // List variant inputs
  @Input() listItems: ListItem[] = [];

  // Tabs variant inputs
  @Input() tabs: TabConfig[] = [];
  @Input() activeTabIndex: number = 0;
  @Input() tabsPagination: any[] = [];

  // Events
  @Output() headerActionClick = new EventEmitter<void>();
  @Output() collapseToggle = new EventEmitter<boolean>();
  @Output() tabChange = new EventEmitter<number>();
  @Output() tablePageChange = new EventEmitter<number>();
  @Output() tablePageSizeChange = new EventEmitter<number>();
  @Output() tableRefresh = new EventEmitter<void>();
  @Output() tabPageChange = new EventEmitter<{ tabIndex: number; page: number }>();
  @Output() tabPageSizeChange = new EventEmitter<{ tabIndex: number; pageSize: number }>();
  @Output() tabRefresh = new EventEmitter<number>();
  @Output() rowAction = new EventEmitter<{ rowIndex: number; action: TableAction }>();

  // Internal state for cell expansion (tracks expanded cells by rowIndex-columnKey)
  private expandedCells: Set<string> = new Set();

  get containerClasses(): string[] {
    const classes = [`table-${this.variant}`];
    if (this.isCollapsible && !this.isExpanded) {
      classes.push('table-collapsed');
    }
    return classes;
  }

  /**
   * Check if cell content is long enough to need expansion
   * (more than 80 characters or marked as expandable in row data)
   */
  isCellLong(row: TableRow, columnKey: string): boolean {
    const cellContent = row[columnKey];
    if (!cellContent) {
      return false;
    }
    const contentStr = String(cellContent);
    // Mark as long if explicitly set OR if content exceeds 80 characters
    return row[columnKey + '_expandable'] === true || contentStr.length > 80;
  }

  /**
   * Check if a specific cell is currently expanded
   */
  isCellExpanded(rowIndex: number, columnKey: string): boolean {
    const cellId = `${rowIndex}-${columnKey}`;
    return this.expandedCells.has(cellId);
  }

  /**
   * Toggle cell expansion state
   */
  toggleCellExpansion(rowIndex: number, columnKey: string): void {
    const cellId = `${rowIndex}-${columnKey}`;
    if (this.expandedCells.has(cellId)) {
      this.expandedCells.delete(cellId);
    } else {
      this.expandedCells.add(cellId);
    }
  }

  toggleCollapse(): void {
    this.isExpanded = !this.isExpanded;
    this.collapseToggle.emit(this.isExpanded);
  }

  onHeaderAction(): void {
    this.headerActionClick.emit();
  }

  onTabChange(index: number): void {
    this.activeTabIndex = index;
    this.tabChange.emit(index);
  }

  onTablePageChange(page: number): void {
    this.tablePageChange.emit(page);
  }

  onTablePageSizeChange(pageSize: number): void {
    this.tablePageSizeChange.emit(pageSize);
  }

  onTableRefresh(): void {
    this.tableRefresh.emit();
  }

  onTabPageChange(tabIndex: number, page: number): void {
    this.tabPageChange.emit({ tabIndex, page });
  }

  onTabPageSizeChange(tabIndex: number, pageSize: number): void {
    this.tabPageSizeChange.emit({ tabIndex, pageSize });
  }

  onTabRefresh(tabIndex: number): void {
    this.tabRefresh.emit(tabIndex);
  }

  onRowAction(rowIndex: number, action: TableAction): void {
    this.rowAction.emit({ rowIndex, action });
    if (action.onClick) {
      action.onClick();
    }
  }

  getActionVariant(actionVariant?: string): ButtonVariant {
    switch (actionVariant) {
      case 'approve':
        return 'default'; // Green variant
      case 'reject':
        return 'destructive'; // Red variant
      case 'view':
        return 'ghost'; // Light blue variant
      default:
        return 'default';
    }
  }

  getHeaderActionVariant(): ButtonVariant {
    const variant = this.headerAction?.variant;
    const validVariants: ButtonVariant[] = ['default', 'secondary', 'outline', 'ghost', 'link', 'destructive'];
    if (variant && validVariants.includes(variant as ButtonVariant)) {
      return variant as ButtonVariant;
    }
    return 'default';
  }

  getHeaderActionSize(): ButtonSize {
    const size = this.headerAction?.size;
    const validSizes: ButtonSize[] = ['sm', 'md', 'lg'];
    if (size && validSizes.includes(size as ButtonSize)) {
      return size as ButtonSize;
    }
    return 'md';
  }
}
