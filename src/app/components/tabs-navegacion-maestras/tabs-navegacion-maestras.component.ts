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
      speech: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.25 2.8125C2.25 2.60516 2.33231 2.40628 2.47882 2.25976C2.62534 2.11325 2.82422 2.03094 3.03156 2.03094H14.9684C15.1758 2.03094 15.3747 2.11325 15.5212 2.25976C15.6677 2.40628 15.75 2.60516 15.75 2.8125V12.4688C15.75 12.6761 15.6677 12.875 15.5212 13.0215C15.3747 13.168 15.1758 13.2503 14.9684 13.2503H10.2187L6.8625 15.2878C6.77933 15.3389 6.68396 15.3669 6.58618 15.369C6.4884 15.3711 6.39194 15.3472 6.30663 15.2997C6.22132 15.2523 6.15004 15.1829 6.1003 15.0985C6.05055 15.0141 6.02407 14.9177 6.02344 14.8194V13.2503H3.03156C2.82422 13.2503 2.62534 13.168 2.47882 13.0215C2.33231 12.875 2.25 12.6761 2.25 12.4688V2.8125ZM5.625 6.75C5.625 6.54289 5.70743 6.34434 5.85484 6.19684C6.00226 6.04933 6.20109 5.96719 6.40781 5.96719H11.5922C11.7989 5.96719 11.9977 6.04933 12.1452 6.19684C12.2926 6.34434 12.375 6.54289 12.375 6.75C12.375 6.95711 12.2926 7.15566 12.1452 7.30316C11.9977 7.45067 11.7989 7.53281 11.5922 7.53281H6.40781C6.20109 7.53281 6.00226 7.45067 5.85484 7.30316C5.70743 7.15566 5.625 6.95711 5.625 6.75ZM6.40781 9.09844C6.20109 9.09844 6.00226 9.18057 5.85484 9.32808C5.70743 9.47558 5.625 9.67413 5.625 9.88125C5.625 10.0884 5.70743 10.2869 5.85484 10.4344C6.00226 10.5819 6.20109 10.6641 6.40781 10.6641H9.75469C9.96141 10.6641 10.1602 10.5819 10.3077 10.4344C10.4551 10.2869 10.5375 10.0884 10.5375 9.88125C10.5375 9.67413 10.4551 9.47558 10.3077 9.32808C10.1602 9.18057 9.96141 9.09844 9.75469 9.09844H6.40781Z" fill="currentColor"/>
</svg>`,
      edit: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.0625 2.4375L15.5625 3.9375L5.0625 14.4375H3.5625V12.9375L14.0625 2.4375ZM14.0625 0.5625C13.7813 0.5625 13.5 0.65625 13.2813 0.875L11.9063 2.25L15.75 6.09375L17.125 4.71875C17.5625 4.28125 17.5625 3.5625 17.125 3.125L14.875 0.875C14.6563 0.65625 14.375 0.5625 14.0625 0.5625ZM11 3.15625L0.5625 13.5938V17.4375H4.40625L14.8438 7L11 3.15625Z" fill="currentColor"/>
</svg>`,
      calendar: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.625 2.25H13.5V1.125C13.5 0.71875 13.1563 0.375 12.75 0.375C12.3437 0.375 12 0.71875 12 1.125V2.25H6V1.125C6 0.71875 5.65625 0.375 5.25 0.375C4.84375 0.375 4.5 0.71875 4.5 1.125V2.25H3.375C2.13281 2.25 1.125 3.25781 1.125 4.5V15.375C1.125 16.6172 2.13281 17.625 3.375 17.625H14.625C15.8672 17.625 16.875 16.6172 16.875 15.375V4.5C16.875 3.25781 15.8672 2.25 14.625 2.25ZM15.375 15.375C15.375 15.7891 15.0391 16.125 14.625 16.125H3.375C2.96094 16.125 2.625 15.7891 2.625 15.375V6.75H15.375V15.375Z" fill="currentColor"/>
</svg>`,
      info: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 0.5625C4.44844 0.5625 0.5625 4.44844 0.5625 9C0.5625 13.5516 4.44844 17.4375 9 17.4375C13.5516 17.4375 17.4375 13.5516 17.4375 9C17.4375 4.44844 13.5516 0.5625 9 0.5625ZM9.75 13.5H8.25V8.25H9.75V13.5ZM9.75 6.75H8.25V5.25H9.75V6.75Z" fill="currentColor"/>
</svg>`,
      file: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 0.5625H3.375C2.54766 0.5625 1.875 1.24219 1.875 2.0625V15.9375C1.875 16.7648 2.54766 17.4375 3.375 17.4375H14.625C15.4523 17.4375 16.125 16.7648 16.125 15.9375V6.1875L10.5 0.5625ZM14.625 15.9375H3.375V2.0625H9.75V6.9375H14.625V15.9375Z" fill="currentColor"/>
</svg>`,
      'file-text': `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 0.5625H3.375C2.54766 0.5625 1.875 1.24219 1.875 2.0625V15.9375C1.875 16.7648 2.54766 17.4375 3.375 17.4375H14.625C15.4523 17.4375 16.125 16.7648 16.125 15.9375V6.1875L10.5 0.5625ZM14.625 15.9375H3.375V2.0625H9.75V6.9375H14.625V15.9375ZM7 8.4375H11V9.9375H7V8.4375ZM7 10.875H11V12.375H7V10.875ZM7 13.3125H9.375V14.8125H7V13.3125Z" fill="currentColor"/>
</svg>`,
      'question-circle': `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 0.5625C4.44844 0.5625 0.5625 4.44844 0.5625 9C0.5625 13.5516 4.44844 17.4375 9 17.4375C13.5516 17.4375 17.4375 13.5516 17.4375 9C17.4375 4.44844 13.5516 0.5625 9 0.5625ZM9.375 13.5H8.625V12.75H9.375V13.5ZM10.125 10.6875C9.84375 10.9688 9.75 11.25 9.75 11.8125H8.8125C8.8125 11.0625 9.09375 10.5 9.5625 10.125C9.84375 9.84375 10.125 9.5625 10.125 9.1875C10.125 8.4375 9.46875 7.78125 8.71875 7.78125C8.15625 7.78125 7.59375 8.15625 7.40625 8.71875L8.21875 9.09375C8.34375 8.8125 8.5 8.625 8.71875 8.625C9.1875 8.625 9.46875 8.90625 9.46875 9.28125C9.46875 9.5625 9.375 9.84375 9.09375 10.125L10.125 10.6875Z" fill="currentColor"/>
</svg>`,
      'check-circle': `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_check_circle)">
<path d="M7.71784 0.847783C9.58188 0.554112 11.4901 0.908875 13.1246 1.85193C13.4833 2.05888 13.6067 2.51713 13.4 2.87586C13.193 3.23463 12.7341 3.35753 12.3753 3.15052C11.0381 2.37896 9.47654 2.08925 7.95148 2.32947C6.42639 2.56975 5.02949 3.32573 3.9942 4.47107C2.95893 5.61647 2.34747 7.08235 2.26203 8.62391C2.17661 10.1655 2.6223 11.6902 3.52472 12.943C4.42713 14.1957 5.73205 15.1014 7.22125 15.5087C8.71046 15.9159 10.2945 15.8004 11.7088 15.1813C13.1232 14.5621 14.2827 13.4763 14.9937 12.1058C15.7047 10.7354 15.9238 9.16258 15.6155 7.64978C15.5329 7.244 15.795 6.84783 16.2007 6.76502C16.6066 6.68232 17.0028 6.94438 17.0855 7.35022C17.4623 9.19929 17.1935 11.1215 16.3245 12.7965C15.4555 14.4716 14.0388 15.7986 12.3101 16.5553C10.5816 17.312 8.64582 17.4529 6.82575 16.9552C5.00556 16.4574 3.41039 15.3508 2.30744 13.8197C1.2045 12.2886 0.659852 10.4253 0.764223 8.54114C0.86862 6.65696 1.61629 4.86542 2.88165 3.46546C4.147 2.06559 5.85383 1.14145 7.71784 0.847783ZM15.97 2.46936C16.2629 2.17681 16.7378 2.17661 17.0306 2.46936C17.3235 2.76226 17.3235 3.23775 17.0306 3.53064L9.53058 11.0306C9.2378 11.3234 8.76294 11.3232 8.47003 11.0306L6.22003 8.78064C5.92714 8.48775 5.92714 8.01226 6.22003 7.71936C6.51294 7.42681 6.98779 7.42661 7.28058 7.71936L9.00031 9.43909L15.97 2.46936Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_check_circle">
<rect width="18" height="18" fill="white"/>
</clipPath>
</defs>
</svg>`,
    };

    return iconMap[iconName] || iconMap['info'];
  }
}
