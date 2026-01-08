import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabNavigationComponent, TabItem } from './tab-navigation.component';
import { PaginationComponent } from './pagination.component';
import { SeparatorComponent } from './separator.component';

export type InfoContainerVariant = 'table' | 'list' | 'tabs';

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

@Component({
  selector: 'storybook-info-container',
  standalone: true,
  imports: [
    CommonModule,
    TabNavigationComponent,
    PaginationComponent,
    SeparatorComponent,
  ],
  template: `
    <div class="info-container" [ngClass]="containerClasses">
      <!-- Header -->
      <div class="info-container-header">
        <!-- Icon -->
        <div class="info-container-icon">
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
            class="info-container-check-icon"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.43155 0.706459C7.98492 0.461733 9.5751 0.757369 10.9372 1.54325C11.2361 1.71571 11.339 2.09758 11.1667 2.39652C10.9942 2.6955 10.6118 2.79791 10.3128 2.6254C9.19841 1.98244 7.89713 1.74102 6.62625 1.9412C5.35534 2.14143 4.19126 2.77142 3.32852 3.72587C2.4658 4.68036 1.95624 5.90193 1.88504 7.18656C1.81386 8.47123 2.18527 9.74182 2.93729 10.7858C3.6893 11.8297 4.77673 12.5845 6.01773 12.9239C7.25873 13.2632 8.57877 13.167 9.75736 12.651C10.936 12.1351 11.9023 11.2303 12.4948 10.0882C13.0872 8.94613 13.2698 7.63546 13.013 6.37479C12.9441 6.03664 13.1625 5.7065 13.5006 5.63749C13.8389 5.56857 14.169 5.78696 14.2379 6.12516C14.5519 7.66605 14.328 9.26786 13.6038 10.6637C12.8796 12.0596 11.699 13.1654 10.2585 13.7961C8.818 14.4266 7.20487 14.5441 5.68814 14.1293C4.17132 13.7145 2.84201 12.7923 1.92288 11.5164C1.00377 10.2404 0.549897 8.68771 0.636872 7.11759C0.72387 5.54744 1.34693 4.05449 2.4014 2.88786C3.45585 1.7213 4.87821 0.951184 6.43155 0.706459ZM13.3084 2.05778C13.5525 1.81398 13.9482 1.81382 14.1922 2.05778C14.4362 2.30185 14.4362 2.6981 14.1922 2.94218L7.94217 9.19218C7.69818 9.43613 7.30247 9.43597 7.05838 9.19218L5.18338 7.31718C4.9393 7.0731 4.9393 6.67686 5.18338 6.43278C5.42747 6.18898 5.82318 6.18882 6.06717 6.43278L7.50028 7.86588L13.3084 2.05778Z"
              fill="white"
            />
          </svg>
        </div>

        <!-- Title -->
        <h2 class="info-container-title">{{ title }}</h2>

        <!-- Collapse button -->
        <button
          *ngIf="collapsible"
          type="button"
          class="info-container-collapse-btn"
          (click)="toggleCollapse()"
          [attr.aria-expanded]="!collapsed"
          [attr.aria-label]="collapsed ? 'Expandir' : 'Contraer'"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            [ngClass]="{ 'info-container-collapse-icon-rotated': collapsed }"
          >
            <path
              d="M11.3691 8.22462C11.7618 7.90427 12.3408 7.92686 12.707 8.29298L18.707 14.293C19.0975 14.6835 19.0975 15.3165 18.707 15.707C18.3164 16.0976 17.6834 16.0976 17.2929 15.707L11.9999 10.4141L6.70696 15.707C6.31643 16.0976 5.68342 16.0976 5.29289 15.707C4.90237 15.3165 4.90237 14.6835 5.29289 14.293L11.2929 8.29298L11.3691 8.22462Z"
              fill="#2563EB"
            />
          </svg>
        </button>
      </div>

      <!-- Body -->
      <div class="info-container-body" *ngIf="!collapsed">
        <!-- Table Variant -->
        <div *ngIf="variant === 'table'" class="info-container-table-wrapper">
          <div class="info-container-table">
            <!-- Table Header -->
            <div class="info-container-table-header">
              <div
                *ngFor="let column of tableColumns"
                class="info-container-table-header-cell"
                [style.width]="column.width || 'auto'"
              >
                {{ column.label }}
              </div>
            </div>

            <storybook-separator></storybook-separator>

            <!-- Table Rows -->
            <div class="info-container-table-body">
              <div *ngFor="let row of tableRows; let i = index" class="info-container-table-row">
                <div
                  *ngFor="let column of tableColumns"
                  class="info-container-table-cell"
                  [style.width]="column.width || 'auto'"
                >
                  <!-- Render label if specified -->
                  <storybook-label
                    *ngIf="row[column.key + '_label']"
                    [text]="row[column.key]"
                    [variant]="row[column.key + '_label_variant'] || 'neutral'"
                  ></storybook-label>

                  <!-- Render plain text otherwise -->
                  <span *ngIf="!row[column.key + '_label']">{{ row[column.key] }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Pagination -->
          <div class="info-container-pagination">
            <storybook-separator></storybook-separator>
            <storybook-pagination
              [currentPage]="tablePagination.currentPage"
              [totalPages]="tablePagination.totalPages"
              [pageSize]="tablePagination.pageSize"
              [pageSizeOptions]="tablePagination.pageSizeOptions"
              [totalItems]="tablePagination.totalItems"
              [rangeLabel]="tablePagination.rangeLabel"
              (pageChange)="onTablePageChange($event)"
              (pageSizeChange)="onTablePageSizeChange($event)"
              (refresh)="onTableRefresh()"
            ></storybook-pagination>
          </div>
        </div>

        <!-- List Variant -->
        <div *ngIf="variant === 'list'" class="info-container-list">
          <p class="info-container-list-intro" *ngIf="listIntro">{{ listIntro }}</p>

          <ul class="info-container-list-items">
            <li *ngFor="let item of listItems" class="info-container-list-item">
              {{ item.text }}
            </li>
          </ul>
        </div>

        <!-- Tabs Variant -->
        <div *ngIf="variant === 'tabs'" class="info-container-tabs-wrapper">
          <!-- Tab Navigation -->
          <storybook-tab-navigation
            [tabs]="tabs"
            [activeIndex]="activeTabIndex"
            [size]="'md'"
            [variant]="'text'"
            (onTabChange)="onTabChange($event)"
          ></storybook-tab-navigation>

          <!-- Tab Content -->
          <div class="info-container-tab-content">
            <div *ngFor="let tab of tabs; let i = index">
              <div *ngIf="i === activeTabIndex && tab.tableData">
                <!-- Table Header -->
                <div class="info-container-table-header">
                  <div
                    *ngFor="let column of tab.tableData.columns"
                    class="info-container-table-header-cell"
                    [style.width]="column.width || 'auto'"
                  >
                    {{ column.label }}
                  </div>
                </div>

                <storybook-separator></storybook-separator>

                <!-- Table Rows -->
                <div class="info-container-table-body">
                  <div *ngFor="let row of tab.tableData.rows" class="info-container-table-row">
                    <div
                      *ngFor="let column of tab.tableData.columns"
                      class="info-container-table-cell"
                      [style.width]="column.width || 'auto'"
                    >
                      <!-- Render label if specified -->
                      <storybook-label
                        *ngIf="row[column.key + '_label']"
                        [text]="row[column.key]"
                        [variant]="row[column.key + '_label_variant'] || 'neutral'"
                      ></storybook-label>

                      <!-- Render plain text otherwise -->
                      <span *ngIf="!row[column.key + '_label']">{{ row[column.key] }}</span>
                    </div>
                  </div>
                </div>

                <!-- Pagination for this tab -->
                <div class="info-container-pagination">
                  <storybook-separator></storybook-separator>
                  <storybook-pagination
                    [currentPage]="tabsPagination[i].currentPage"
                    [totalPages]="tabsPagination[i].totalPages"
                    [pageSize]="tabsPagination[i].pageSize"
                    [pageSizeOptions]="tabsPagination[i].pageSizeOptions"
                    [totalItems]="tabsPagination[i].totalItems"
                    [rangeLabel]="tabsPagination[i].rangeLabel"
                    (pageChange)="onTabPageChange(i, $event)"
                    (pageSizeChange)="onTabPageSizeChange(i, $event)"
                    (refresh)="onTabRefresh(i)"
                  ></storybook-pagination>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./info-container.css'],
})
export class InfoContainerComponent {
  /** Container title */
  @Input() title: string = 'Título del Contenedor';

  /** Display variant */
  @Input() variant: InfoContainerVariant = 'table';

  /** Whether the container is collapsible */
  @Input() collapsible: boolean = true;

  /** Initial collapsed state */
  @Input() collapsed: boolean = false;

  // Table variant inputs
  @Input() tableColumns: TableColumn[] = [];
  @Input() tableRows: TableRow[] = [];
  @Input() tablePagination = {
    currentPage: 1,
    totalPages: 1,
    pageSize: 5,
    pageSizeOptions: [5, 10, 20],
    totalItems: 0,
    rangeLabel: '0 - 0 de 0 ítems',
  };

  // List variant inputs
  @Input() listIntro: string = '';
  @Input() listItems: ListItem[] = [];

  // Tabs variant inputs
  @Input() tabs: TabConfig[] = [];
  @Input() activeTabIndex: number = 0;
  @Input() tabsPagination: any[] = [];

  // Events
  @Output() collapseChange = new EventEmitter<boolean>();
  @Output() tabChange = new EventEmitter<number>();
  @Output() tablePageChange = new EventEmitter<number>();
  @Output() tablePageSizeChange = new EventEmitter<number>();
  @Output() tableRefresh = new EventEmitter<void>();
  @Output() tabPageChange = new EventEmitter<{ tabIndex: number; page: number }>();
  @Output() tabPageSizeChange = new EventEmitter<{ tabIndex: number; pageSize: number }>();
  @Output() tabRefresh = new EventEmitter<number>();

  get containerClasses(): string[] {
    return [
      `info-container-${this.variant}`,
      this.collapsed ? 'info-container-collapsed' : 'info-container-expanded',
    ];
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.collapseChange.emit(this.collapsed);
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
}
