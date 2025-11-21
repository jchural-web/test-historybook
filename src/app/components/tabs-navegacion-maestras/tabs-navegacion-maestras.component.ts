import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export type TabTipo = 'rectangular' | 'cuadrada-icono' | 'barra-superior';

export interface TabMaestra {
  id: string;
  label: string;
  tipo: TabTipo;
  showCount?: boolean;
  count?: number;
  iconName?: string;
  color?: 'blue' | 'green' | 'orange' | 'gray';
  disabled?: boolean;
}

@Component({
  selector: 'app-tabs-navegacion-maestras',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs-navegacion-maestras.component.html',
  styleUrls: ['./tabs-navegacion-maestras.component.css'],
})
export class TabsNavegacionMaestrasComponent {
  @Input() tabs: TabMaestra[] = [];
  @Input() activeTabId?: string;

  @Output() tabChange = new EventEmitter<string>();

  constructor(private sanitizer: DomSanitizer) {}

  onTabClick(tab: TabMaestra): void {
    if (!tab.disabled && tab.id !== this.activeTabId) {
      this.tabChange.emit(tab.id);
    }
  }

  isActive(tabId: string): boolean {
    return this.activeTabId === tabId;
  }

  getTabClasses(tab: TabMaestra): string {
    const classes = ['tab', `tab-${tab.tipo}`];
    
    if (this.isActive(tab.id)) {
      classes.push('tab-selected');
    } else {
      classes.push('tab-unselected');
    }
    
    if (tab.disabled) {
      classes.push('tab-disabled');
    }
    
    if (tab.color) {
      classes.push(`tab-color-${tab.color}`);
    } else {
      classes.push('tab-color-blue');
    }
    
    return classes.join(' ');
  }

  getContainerClasses(): string {
    if (this.tabs.length === 0) return 'tabs-container';
    
    const firstTab = this.tabs[0];
    return `tabs-container tabs-container-${firstTab.tipo}`;
  }

  getSanitizedIcon(iconName?: string): SafeHtml {
    if (!iconName) return '';
    return this.sanitizer.bypassSecurityTrustHtml(this.getIconSvg(iconName));
  }

  private getIconSvg(iconName: string): string {
    const iconMap: { [key: string]: string } = {
      'speech': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 14.6667C8.5 13.9303 9.09695 13.3333 9.83333 13.3333H18.1667C18.903 13.3333 19.5 13.9303 19.5 14.6667C19.5 15.403 18.903 16 18.1667 16H9.83333C9.09695 16 8.5 15.403 8.5 14.6667ZM8.5 10.6667C8.5 9.93029 9.09695 9.33334 9.83333 9.33334H18.1667C18.903 9.33334 19.5 9.93029 19.5 10.6667C19.5 11.403 18.903 12 18.1667 12H9.83333C9.09695 12 8.5 11.403 8.5 10.6667ZM12.8333 6.66667C12.8333 5.93029 13.4303 5.33334 14.1667 5.33334H18.1667C18.903 5.33334 19.5 5.93029 19.5 6.66667C19.5 7.40305 18.903 8.00001 18.1667 8.00001H14.1667C13.4303 8.00001 12.8333 7.40305 12.8333 6.66667ZM4.5 8.00001C4.5 5.60648 6.43981 3.66667 8.83333 3.66667H19.1667C21.5602 3.66667 23.5 5.60648 23.5 8.00001V18.3333C23.5 20.7269 21.5602 22.6667 19.1667 22.6667H8.83333C6.43981 22.6667 4.5 20.7269 4.5 18.3333V8.00001ZM8.83333 6.33334C7.91286 6.33334 7.16667 7.07953 7.16667 8.00001V18.3333C7.16667 19.2538 7.91286 20 8.83333 20H19.1667C20.0871 20 20.8333 19.2538 20.8333 18.3333V8.00001C20.8333 7.07953 20.0871 6.33334 19.1667 6.33334H8.83333Z" fill="currentColor"/>
</svg>`,
      'edit': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 20.5V16.8431L15.2929 5.05025C15.6834 4.65972 16.3166 4.65972 16.7071 5.05025L18.9497 7.29289C19.3403 7.68342 19.3403 8.31658 18.9497 8.70711L7.15686 20.5H3.5ZM17.5355 9.12132L14.8787 6.46447L16.2929 5.05025C16.6834 4.65972 17.3166 4.65972 17.7071 5.05025L19.9497 7.29289C20.3403 7.68342 20.3403 8.31658 19.9497 8.70711L17.5355 9.12132Z" fill="currentColor"/>
</svg>`,
      'calendar': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2C8.55228 2 9 2.44772 9 3V4H15V3C15 2.44772 15.4477 2 16 2C16.5523 2 17 2.44772 17 3V4H19C20.6569 4 22 5.34315 22 7V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V7C2 5.34315 3.34315 4 5 4H7V3C7 2.44772 7.44772 2 8 2ZM7 6H5C4.44772 6 4 6.44772 4 7V9H20V7C20 6.44772 19.5523 6 19 6H17V7C17 7.55228 16.5523 8 16 8C15.4477 8 15 7.55228 15 7V6H9V7C9 7.55228 8.55228 8 8 8C7.44772 8 7 7.55228 7 7V6ZM20 11H4V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V11Z" fill="currentColor"/>
</svg>`,
      'info': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z" fill="currentColor"/>
</svg>`,
      'file': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V9L13 2ZM18 20H6V4H12V10H18V20Z" fill="currentColor"/>
</svg>`,
      'check-circle': `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="currentColor"/>
</svg>`,
    };

    return iconMap[iconName] || iconMap['info'];
  }
}
