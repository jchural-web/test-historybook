import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export type FabVariant = 'circular' | 'extendido' | 'circular-con-badge';

export type FabColor = 'primary' | 'secondary' | 'warning' | 'success';

export interface FabPosition {
  bottom?: string;
  right?: string;
  top?: string;
  left?: string;
}

@Component({
  selector: 'app-floating-action-button-maestro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './floating-action-button-maestro.component.html',
  styleUrls: ['./floating-action-button-maestro.component.css'],
})
export class FloatingActionButtonMaestroComponent {
  @Input() variant: FabVariant = 'circular';
  @Input() label: string = 'Acción';
  @Input() iconName: string = 'file-text';
  @Input() showLabel: boolean = false;
  @Input() color: FabColor = 'primary';
  @Input() floating: boolean = true;
  @Input() position: FabPosition = { bottom: '20px', right: '20px' };
  @Input() showBadge: boolean = false;
  @Input() badgeCount: number = 0;

  @Output() clicked = new EventEmitter<MouseEvent>();

  constructor(private sanitizer: DomSanitizer) {}

  onClick(event: MouseEvent): void {
    this.clicked.emit(event);
  }

  get fabClass(): string {
    return `fab fab-${this.variant} fab-color-${this.color}`;
  }

  get fabContainerClass(): string {
    return this.floating ? 'fab-container fab-floating' : 'fab-container';
  }

  get containerStyle(): { [key: string]: string } {
    if (!this.floating) {
      return {};
    }
    const styles: { [key: string]: string } = {};
    if (this.position.bottom) styles['bottom'] = this.position.bottom;
    if (this.position.right) styles['right'] = this.position.right;
    if (this.position.top) styles['top'] = this.position.top;
    if (this.position.left) styles['left'] = this.position.left;
    return styles;
  }

  getSanitizedIcon(): SafeHtml {
    const svg = this.getIconSvg(this.iconName);
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  private getIconSvg(iconName: string): string {
    const iconMap: { [key: string]: string } = {
      'file-text': `<svg width="32" height="32" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.625 37.5V7.5C5.625 6.00816 6.21806 4.57784 7.27295 3.52295C8.32784 2.46806 9.75816 1.875 11.25 1.875H26.25V1.87683C27.0898 1.87587 27.9222 2.03877 28.6981 2.36023C29.4738 2.68167 30.178 3.15372 30.7709 3.74817L37.4945 10.4718L37.7124 10.6989C38.2075 11.2422 38.6055 11.8678 38.8879 12.5482C39.2103 13.3251 39.376 14.1589 39.375 15V37.5C39.375 38.9918 38.7819 40.4222 37.7271 41.4771C36.6722 42.5319 35.2418 43.125 33.75 43.125H11.25C9.75816 43.125 8.32784 43.125 7.27295 41.4771C6.21806 40.4222 5.625 38.9918 5.625 37.5ZM30 30C31.0355 30 31.875 30.8395 31.875 31.875C31.875 32.9105 31.0355 33.75 30 33.75H15C13.9645 33.75 13.125 32.9105 13.125 31.875C13.125 30.8395 13.9645 30 15 30H30ZM30 22.5C31.0355 22.5 31.875 23.3395 31.875 24.375C31.875 25.4105 31.0355 26.25 30 26.25H15C13.9645 26.25 13.125 25.4105 13.125 24.375C13.125 23.3395 13.9645 22.5 15 22.5H30ZM18.75 15C19.7855 15 20.625 15.8395 20.625 16.875C20.625 17.9105 19.7855 18.75 18.75 18.75H15C13.9645 18.75 13.125 17.9105 13.125 16.875C13.125 15.8395 13.9645 15 15 15H18.75ZM34.845 13.125L28.125 6.40503V13.125H34.845ZM9.375 37.5C9.375 37.9973 9.57269 38.4741 9.92432 38.8257C10.2759 39.1773 10.7527 39.375 11.25 39.375H33.75C34.2473 39.375 34.7241 39.1773 35.0757 38.8257C35.4273 38.4741 35.625 37.9973 35.625 37.5V16.875H28.125C27.1304 16.875 26.1769 16.4796 25.4736 15.7764C24.7704 15.0731 24.375 14.1196 24.375 13.125V5.625H11.25C10.7527 5.625 10.2759 5.82269 9.92432 6.17432C9.57269 6.52595 9.375 7.00272 9.375 7.5V37.5Z" fill="currentColor"/>
</svg>`,
      'message-square': `<svg width="32" height="32" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.6249 7.29166C30.6249 6.90488 30.4712 6.53406 30.1977 6.26057C29.9242 5.98708 29.5534 5.83332 29.1666 5.83332H5.83325C5.44648 5.83332 5.07565 5.98708 4.80216 6.26057C4.52867 6.53406 4.37492 6.90488 4.37492 7.29166V30.0211L6.86434 27.5317L7.18477 27.2412C7.96312 26.6032 8.94239 26.2502 9.9576 26.25H29.1666C29.5534 26.25 29.9242 26.0962 30.1977 25.8227C30.4712 25.5493 30.6249 25.1784 30.6249 24.7917V7.29166ZM33.5416 24.7917C33.5416 25.952 33.0803 27.0644 32.2598 27.8849C31.4394 28.7054 30.3269 29.1667 29.1666 29.1667H9.9576C9.57091 29.1668 9.19991 29.3204 8.92651 29.5939L5.71505 32.8054C5.36644 33.1539 4.92245 33.3913 4.43901 33.4875C3.9554 33.5837 3.45332 33.5352 2.99776 33.3465C2.54219 33.1579 2.15239 32.8379 1.87838 32.428C1.6385 32.069 1.49708 31.6544 1.46537 31.226L1.45825 31.0423V7.29166C1.45825 6.13133 1.91952 5.01887 2.73999 4.19839C3.56046 3.37792 4.67293 2.91666 5.83325 2.91666H29.1666C30.3269 2.91666 31.4394 3.37792 32.2598 4.19839C33.0803 5.01887 33.5416 6.13133 33.5416 7.29166V24.7917Z" fill="currentColor"/>
</svg>`,
      'plus': `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    };

    return iconMap[iconName] || '';
  }
}
