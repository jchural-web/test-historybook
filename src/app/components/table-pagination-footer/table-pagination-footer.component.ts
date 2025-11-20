import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table-pagination-footer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './table-pagination-footer.component.html',
  styleUrls: ['./table-pagination-footer.component.css'],
})
export class TablePaginationFooterComponent {
  @Input()
  currentPage: number = 1;

  @Input()
  totalPages: number = 1;

  @Input()
  pageSize: number = 10;

  @Input()
  pageSizeOptions: number[] = [5, 10, 20, 50];

  @Input()
  totalItems: number = 0;

  @Output()
  pageChange = new EventEmitter<number>();

  @Output()
  pageSizeChange = new EventEmitter<number>();

  showPageSizeDropdown = false;

  get startItem(): number {
    return (this.currentPage - 1) * this.pageSize + 1;
  }

  get endItem(): number {
    return Math.min(this.currentPage * this.pageSize, this.totalItems);
  }

  onPageInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const page = parseInt(input.value, 10);
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.pageChange.emit(this.currentPage);
    }
  }

  goToFirstPage(): void {
    if (this.currentPage > 1) {
      this.currentPage = 1;
      this.pageChange.emit(this.currentPage);
    }
  }

  goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.pageChange.emit(this.currentPage);
    }
  }

  goToNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.pageChange.emit(this.currentPage);
    }
  }

  goToLastPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage = this.totalPages;
      this.pageChange.emit(this.currentPage);
    }
  }

  refresh(): void {
    this.pageChange.emit(this.currentPage);
  }

  togglePageSizeDropdown(): void {
    this.showPageSizeDropdown = !this.showPageSizeDropdown;
  }

  selectPageSize(size: number): void {
    this.pageSize = size;
    this.showPageSizeDropdown = false;
    this.pageSizeChange.emit(this.pageSize);
  }
}
