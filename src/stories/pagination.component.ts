import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface PaginationChangeEvent {
  currentPage: number;
  pageSize: number;
}

export interface PageSizeChangeEvent {
  pageSize: number;
}

@Component({
  selector: 'storybook-pagination',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="pagination-container">
      <!-- Left section: Current page -->
      <div class="pagination-section-left">
        <span class="pagination-label">Página</span>
        <input
          type="number"
          class="pagination-input"
          [value]="currentPage"
          [min]="1"
          [max]="totalPages"
          (input)="onPageInputChange($event)"
          (blur)="onPageInputBlur()"
          [disabled]="totalPages === 0"
        />
        <span class="pagination-label">de {{ totalPages }}</span>
      </div>

      <!-- Middle section: Page size selector -->
      <div class="pagination-section-middle">
        <div class="pagination-select-wrapper">
          <select class="pagination-select" [value]="pageSize" (change)="onPageSizeChange($event)">
            <option *ngFor="let option of pageSizeOptions" [value]="option">
              {{ option }}
            </option>
          </select>
          <svg
            class="pagination-select-icon"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8081 5.18312C11.0522 4.93904 11.4478 4.93904 11.6919 5.18312C11.936 5.4272 11.936 5.82283 11.6919 6.06691L7.94191 9.81691C7.69783 10.061 7.3022 10.061 7.05812 9.81691L3.30812 6.06691C3.06404 5.82283 3.06404 5.4272 3.30812 5.18312C3.5522 4.93904 3.94783 4.93904 4.19191 5.18312L7.50001 8.49122L10.8081 5.18312Z"
              fill="#848485"
            />
          </svg>
        </div>
        <span class="pagination-label">ítems por página</span>
      </div>

      <!-- Right section: Range label and navigation -->
      <div class="pagination-section-right">
        <span class="pagination-range-label">{{ rangeLabel }}</span>

        <!-- Navigation buttons -->
        <div class="pagination-nav-controls">
          <!-- First page -->
          <button
            type="button"
            class="pagination-nav-btn"
            [disabled]="currentPage === 1 || totalPages === 0"
            (click)="goToFirstPage()"
            aria-label="Primera página"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.43312 3.93312C6.6772 3.68904 7.07283 3.68904 7.31691 3.93312C7.56099 4.1772 7.56099 4.57283 7.31691 4.81691L4.6338 7.50001L7.31691 10.1831C7.56099 10.4272 7.56099 10.8228 7.31691 11.0669C7.07283 11.311 6.6772 11.311 6.43312 11.0669L3.30812 7.94191C3.06404 7.69783 3.06404 7.3022 3.30812 7.05812L6.43312 3.93312ZM10.8081 3.93312C11.0522 3.68904 11.4478 3.68904 11.6919 3.93312C11.936 4.1772 11.936 4.57283 11.6919 4.81691L9.0088 7.50001L11.6919 10.1831C11.936 10.4272 11.936 10.8228 11.6919 11.0669C11.4478 11.311 11.0522 11.311 10.8081 11.0669L7.68312 7.94191C7.43904 7.69783 7.43904 7.3022 7.68312 7.05812L10.8081 3.93312Z"
                fill="#939394"
              />
            </svg>
          </button>

          <!-- Previous page -->
          <button
            type="button"
            class="pagination-nav-btn"
            [disabled]="currentPage === 1 || totalPages === 0"
            (click)="goToPreviousPage()"
            aria-label="Página anterior"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.33754 3.08754C8.56535 2.85974 8.93461 2.85974 9.16241 3.08754C9.39022 3.31535 9.39022 3.68461 9.16241 3.91241L6.07485 6.99998L9.16241 10.0875C9.39022 10.3153 9.39022 10.6846 9.16241 10.9124C8.93461 11.1402 8.56535 11.1402 8.33754 10.9124L4.83754 7.41241C4.60974 7.18461 4.60974 6.81535 4.83754 6.58754L8.33754 3.08754Z"
                fill="#939394"
              />
            </svg>
          </button>

          <!-- Next page -->
          <button
            type="button"
            class="pagination-nav-btn"
            [disabled]="currentPage >= totalPages || totalPages === 0"
            (click)="goToNextPage()"
            aria-label="Página siguiente"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.52864 3.52864C5.78899 3.26829 6.21099 3.26829 6.47134 3.52864L10.4713 7.52864C10.7317 7.78899 10.7317 8.211 10.4713 8.47134L6.47134 12.4713C6.21099 12.7317 5.78899 12.7317 5.52864 12.4713C5.26829 12.211 5.26829 11.789 5.52864 11.5286L9.05728 7.99999L5.52864 4.47134C5.26829 4.21099 5.26829 3.78899 5.52864 3.52864Z"
                fill="#939394"
              />
            </svg>
          </button>

          <!-- Last page -->
          <button
            type="button"
            class="pagination-nav-btn"
            [disabled]="currentPage >= totalPages || totalPages === 0"
            (click)="goToLastPage()"
            aria-label="Última página"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.52864 4.19532C3.78899 3.93497 4.21099 3.93497 4.47134 4.19532L7.80468 7.52866C8.06503 7.78901 8.06503 8.21102 7.80468 8.47136L4.47134 11.8047C4.21099 12.065 3.78899 12.065 3.52864 11.8047C3.26829 11.5443 3.26829 11.1223 3.52864 10.862L6.39062 8.00001L3.52864 5.13803C3.26829 4.87768 3.26829 4.45567 3.52864 4.19532ZM8.1953 4.19532C8.45565 3.93497 8.87766 3.93497 9.13801 4.19532L12.4713 7.52866C12.7317 7.78901 12.7317 8.21102 12.4713 8.47136L9.13801 11.8047C8.87766 12.065 8.45565 12.065 8.1953 11.8047C7.93495 11.5443 7.93495 11.1223 8.1953 10.862L11.0573 8.00001L8.1953 5.13803C7.93495 4.87768 7.93495 4.45567 8.1953 4.19532Z"
                fill="#939394"
              />
            </svg>
          </button>

          <!-- Refresh -->
          <button
            type="button"
            class="pagination-nav-btn"
            (click)="onRefresh()"
            aria-label="Refrescar"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.16663 12.25V9.33332C1.16663 9.01116 1.42779 8.74999 1.74996 8.74999H4.66663C4.98879 8.74999 5.24996 9.01116 5.24996 9.33332C5.24996 9.65549 4.98879 9.91666 4.66663 9.91666H3.15816L3.47376 10.2322L3.65491 10.3992C4.57867 11.2098 5.76662 11.6612 7.0011 11.6661C8.23836 11.6658 9.42511 11.1749 10.3 10.3C11.1752 9.42487 11.6666 8.23767 11.6666 6.99999C11.6666 6.67782 11.9278 6.41666 12.25 6.41666C12.5721 6.41666 12.8333 6.67782 12.8333 6.99999C12.8333 8.54709 12.2188 10.0309 11.1249 11.1249C10.0309 12.2189 8.54706 12.8333 6.99996 12.8333H6.99768C5.48052 12.8276 4.02054 12.2721 2.88529 11.2759L2.65572 11.064L2.33329 10.7415V12.25C2.33329 12.5722 2.07213 12.8333 1.74996 12.8333C1.42779 12.8333 1.16663 12.5722 1.16663 12.25ZM1.16663 6.99999C1.16663 5.45289 1.78108 3.96903 2.87504 2.87507C3.969 1.78111 5.45286 1.16666 6.99996 1.16666H7.00224L7.30473 1.1752C8.71256 1.24848 10.055 1.79424 11.1146 2.72411L11.3442 2.93603L11.6666 3.25845V1.74999C11.6666 1.42782 11.9278 1.16666 12.25 1.16666C12.5721 1.16666 12.8333 1.42782 12.8333 1.74999V4.66666C12.8333 4.98882 12.5721 5.24999 12.25 5.24999H9.33329C9.01113 5.24999 8.74996 4.98882 8.74996 4.66666C8.74996 4.34449 9.01113 4.08332 9.33329 4.08332H10.8418L10.5262 3.76773L10.345 3.60082C9.4211 2.79008 8.23293 2.33809 6.99825 2.33332C5.76119 2.33378 4.57468 2.82517 3.69991 3.69994C2.82474 4.57511 2.33329 5.76231 2.33329 6.99999C2.33329 7.32216 2.07213 7.58332 1.74996 7.58332C1.42779 7.58332 1.16663 7.32216 1.16663 6.99999Z"
                fill="#939394"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./pagination.css'],
})
export class PaginationComponent {
  /** Current active page (1-based) */
  @Input() set currentPage(value: number) {
    this._currentPage = value;
  }
  get currentPage(): number {
    return this._currentPage;
  }
  private _currentPage: number = 1;

  /** Total number of pages */
  @Input() totalPages: number = 1;

  /** Number of items per page */
  @Input() pageSize: number = 5;

  /** Available page size options */
  @Input() pageSizeOptions: number[] = [5, 10, 20];

  /** Total number of items */
  @Input() totalItems: number = 5;

  /** Range label text (e.g., "1 - 5 de 5 ítems") */
  @Input() rangeLabel: string = '1 - 5 de 5 ítems';

  /** Emitted when page changes */
  @Output() pageChange = new EventEmitter<number>();

  /** Emitted when page size changes */
  @Output() pageSizeChange = new EventEmitter<number>();

  /** Emitted when any pagination parameter changes */
  @Output() paginationChange = new EventEmitter<PaginationChangeEvent>();

  /** Emitted when refresh button is clicked */
  @Output() refresh = new EventEmitter<void>();

  private tempPageValue: string = '';

  goToFirstPage(): void {
    if (this._currentPage !== 1 && this.totalPages > 0) {
      this.updatePage(1);
    }
  }

  goToPreviousPage(): void {
    if (this._currentPage > 1) {
      this.updatePage(this._currentPage - 1);
    }
  }

  goToNextPage(): void {
    if (this._currentPage < this.totalPages) {
      this.updatePage(this._currentPage + 1);
    }
  }

  goToLastPage(): void {
    if (this._currentPage !== this.totalPages && this.totalPages > 0) {
      this.updatePage(this.totalPages);
    }
  }

  onPageInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.tempPageValue = input.value;
  }

  onPageInputBlur(): void {
    if (this.tempPageValue === '') {
      return;
    }

    let page = parseInt(this.tempPageValue, 10);

    if (isNaN(page)) {
      this.tempPageValue = '';
      return;
    }

    // Clamp to valid range
    page = Math.max(1, Math.min(page, this.totalPages));
    this.updatePage(page);
    this.tempPageValue = '';
  }

  onPageSizeChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    const newPageSize = parseInt(select.value, 10);

    if (!isNaN(newPageSize) && newPageSize !== this.pageSize) {
      this.pageSizeChange.emit(newPageSize);
      this.paginationChange.emit({
        currentPage: this._currentPage,
        pageSize: newPageSize,
      });
    }
  }

  onRefresh(): void {
    this.refresh.emit();
  }

  private updatePage(page: number): void {
    this._currentPage = page;
    this.pageChange.emit(page);
    this.paginationChange.emit({
      currentPage: page,
      pageSize: this.pageSize,
    });
  }
}
