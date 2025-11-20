import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface SidebarModule {
  icon: string;
  label: string;
  badgeCount?: number;
  hasChildren?: boolean;
  active?: boolean;
}

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css'],
})
export class SidebarMenuComponent {
  @Input()
  isExpanded: boolean = true;

  @Input()
  modules: SidebarModule[] = [];

  toggleSidebar(): void {
    this.isExpanded = !this.isExpanded;
  }
}
