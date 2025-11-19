import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActividadesTableComponent, ActividadRow } from './actividades-table.component';
import { TablePaginationFooterComponent } from '../table-pagination-footer/table-pagination-footer.component';

@Component({
  selector: 'app-actividades-table-with-pagination',
  standalone: true,
  imports: [CommonModule, ActividadesTableComponent, TablePaginationFooterComponent],
  template: `
    <app-actividades-table
      [headerColor]="headerColor"
      [rows]="displayedRows"
    >
      <app-table-pagination-footer
        tableFooter
        [currentPage]="currentPage"
        [totalPages]="totalPages"
        [pageSize]="pageSize"
        [pageSizeOptions]="pageSizeOptions"
        [totalItems]="allRows.length"
        (pageChange)="onPageChange($event)"
        (pageSizeChange)="onPageSizeChange($event)"
      ></app-table-pagination-footer>
    </app-actividades-table>
  `,
  styles: [],
})
export class ActividadesTableWithPaginationComponent implements OnInit {
  @Input()
  headerColor: string = '#E3F2FD';

  @Input()
  allRows: ActividadRow[] = [];

  @Input()
  pageSizeOptions: number[] = [5, 10, 20, 50];

  currentPage: number = 1;
  pageSize: number = 10;
  displayedRows: ActividadRow[] = [];

  ngOnInit(): void {
    this.updateDisplayedRows();
  }

  get totalPages(): number {
    return Math.ceil(this.allRows.length / this.pageSize);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.updateDisplayedRows();
  }

  onPageSizeChange(size: number): void {
    this.pageSize = size;
    this.currentPage = 1;
    this.updateDisplayedRows();
  }

  private updateDisplayedRows(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedRows = this.allRows.slice(startIndex, endIndex);
  }
}
