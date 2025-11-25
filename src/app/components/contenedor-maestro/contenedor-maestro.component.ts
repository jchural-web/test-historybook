import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconSlotComponent } from '../icon-slot/icon-slot.component';
import { TablePaginationFooterComponent } from '../table-pagination-footer/table-pagination-footer.component';
import { TagsMaestrasComponent } from '../tags-maestras/tags-maestras.component';

export type ContenedorMaestroVariant =
  | 'simple'
  | 'tabla'
  | 'blanco'
  | 'tabla-items'
  | 'tabla-items-leyenda'
  | 'tabla-desplegable';

@Component({
  selector: 'app-contenedor-maestro',
  standalone: true,
  imports: [CommonModule, IconSlotComponent, TablePaginationFooterComponent, TagsMaestrasComponent],
  templateUrl: './contenedor-maestro.component.html',
  styleUrls: ['./contenedor-maestro.component.css'],
})
export class ContenedorMaestroComponent implements OnInit {
  @Input() variant: ContenedorMaestroVariant = 'simple';
  @Input() title?: string;
  @Input() iconName?: string;
  @Input() headerBgColor: string = '#E3F2FD';
  @Input() headerTextColor: string = '#6B26E8';
  @Input() width?: string;
  @Input() height?: string;

  // Pagination inputs
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 3;
  @Input() pageSize: number = 10;
  @Input() pageSizeOptions: number[] = [5, 10, 20, 50];
  @Input() totalItems: number = 22;

  // Collapsible inputs
  @Input() collapsible: boolean = false;
  @Input() defaultCollapsed: boolean = true;
  @Input() showCollapseIcon: boolean = true;

  @Output() pageChange = new EventEmitter<number>();
  @Output() pageSizeChange = new EventEmitter<number>();

  // Collapsible state
  isCollapsed: boolean = false;

  get containerStyle(): { [key: string]: string } {
    const style: { [key: string]: string } = {};
    if (this.width) style['width'] = this.width;
    if (this.height) style['height'] = this.height;
    return style;
  }

  get headerStyle(): { [key: string]: string } {
    return {
      'background-color': this.headerBgColor,
      'color': this.headerTextColor,
    };
  }

  get showHeader(): boolean {
    return this.variant !== 'blanco';
  }

  get showTableHeader(): boolean {
    return (this.variant === 'tabla-items' || this.variant === 'tabla-items-leyenda') && !this.isCollapsed;
  }

  get showLeyenda(): boolean {
    return this.variant === 'tabla-items-leyenda' && !this.isCollapsed;
  }

  get showTableFooter(): boolean {
    return (this.variant === 'tabla' || this.variant === 'tabla-items' || this.variant === 'tabla-items-leyenda' || this.variant === 'tabla-desplegable')
      && !this.isCollapsed;
  }

  get showTableBody(): boolean {
    return (this.variant === 'tabla' || this.variant === 'tabla-items' || this.variant === 'tabla-items-leyenda' || this.variant === 'tabla-desplegable')
      && !this.isCollapsed;
  }

  get showContenido(): boolean {
    return (this.variant === 'simple' || this.variant === 'blanco') && !this.isCollapsed;
  }

  ngOnInit(): void {
    this.isCollapsed = this.defaultCollapsed;
  }

  toggleCollapse(): void {
    if (!this.collapsible) return;
    this.isCollapsed = !this.isCollapsed;
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.pageChange.emit(page);
  }

  onPageSizeChange(size: number): void {
    this.pageSize = size;
    this.pageSizeChange.emit(size);
  }
}
