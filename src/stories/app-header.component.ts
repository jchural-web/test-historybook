import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AvatarComponent } from './avatar.component';

export interface AppHeaderUser {
  name: string;
  avatarImage?: string;
}

// Icon definitions extracted from Figma
const icons: Record<string, string> = {
  menu: `<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.625 14.25C17.0623 14.25 17.4167 14.6044 17.4167 15.0417C17.4167 15.4789 17.0623 15.8333 16.625 15.8333H2.37504C1.93782 15.8333 1.58337 15.4789 1.58337 15.0417C1.58337 14.6044 1.93782 14.25 2.37504 14.25H16.625ZM16.625 8.70832C17.0623 8.70832 17.4167 9.06276 17.4167 9.49999C17.4167 9.93722 17.0623 10.2917 16.625 10.2917H2.37504C1.93782 10.2917 1.58337 9.93722 1.58337 9.49999C1.58337 9.06276 1.93782 8.70832 2.37504 8.70832H16.625ZM16.625 3.16666C17.0623 3.16666 17.4167 3.5211 17.4167 3.95832C17.4167 4.39555 17.0623 4.74999 16.625 4.74999H2.37504C1.93782 4.74999 1.58337 4.39555 1.58337 3.95832C1.58337 3.5211 1.93782 3.16666 2.37504 3.16666H16.625Z" fill="white"/>
</svg>`,
  bell: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.7218 17.0833C10.9519 16.6848 11.4617 16.548 11.8603 16.7782C12.2588 17.0083 12.3954 17.5181 12.1654 17.9167C11.946 18.2967 11.6299 18.612 11.2499 18.8314C10.8699 19.0508 10.4387 19.1667 9.99992 19.1667C9.56117 19.1666 9.12989 19.0508 8.74992 18.8314C8.37003 18.612 8.05457 18.2966 7.8352 17.9167C7.60506 17.5181 7.74181 17.0083 8.14038 16.7782C8.53885 16.5483 9.04795 16.685 9.27807 17.0833C9.3512 17.21 9.4566 17.3154 9.58325 17.3885C9.70987 17.4616 9.85371 17.5 9.99992 17.5C10.1461 17.5 10.29 17.4616 10.4166 17.3885C10.5432 17.3154 10.6486 17.21 10.7218 17.0833ZM14.1666 6.66668C14.1666 5.56175 13.7279 4.50209 12.9467 3.72071C12.1653 2.93931 11.105 2.50001 9.99992 2.50001C8.89492 2.50006 7.83531 2.93936 7.05395 3.72071C6.27262 4.50211 5.83325 5.56166 5.83325 6.66668C5.83325 8.62856 5.52575 9.99851 5.02759 11.0531C4.53553 12.0947 3.88258 12.7671 3.33406 13.3333H16.6666C16.1169 12.7668 15.4649 12.094 14.9731 11.0531C14.4747 9.99832 14.1666 8.62846 14.1666 6.66668ZM15.8332 6.66668C15.8332 8.45391 16.1132 9.56575 16.4794 10.341C16.7548 10.9239 17.0941 11.3519 17.4804 11.7708L17.8816 12.1924L17.8995 12.2119C18.1169 12.4508 18.2603 12.7476 18.3121 13.0664C18.3638 13.3851 18.3221 13.7119 18.1916 14.0072C18.061 14.3025 17.847 14.5536 17.5764 14.7298C17.3395 14.884 17.0677 14.9757 16.787 14.9959L16.6666 15H3.33325C3.01023 14.9998 2.69394 14.9055 2.42342 14.729C2.15289 14.5525 1.93931 14.3011 1.809 14.0055C1.67873 13.71 1.63721 13.3827 1.68937 13.064C1.74155 12.7454 1.88521 12.4488 2.10278 12.2103L2.11987 12.1916C2.67358 11.6199 3.15332 11.1181 3.52042 10.341C3.86375 9.61419 4.13123 8.59155 4.16333 6.99383L4.16658 6.66668C4.16658 5.11958 4.7816 3.63548 5.87557 2.54151C6.96945 1.44779 8.45304 0.833398 9.99992 0.833344C11.547 0.833344 13.0311 1.44762 14.1251 2.54151C15.219 3.63548 15.8332 5.11958 15.8332 6.66668Z" fill="white"/>
</svg>`,
  refresh: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.33325 14V10.6667C1.33325 10.2985 1.63173 10 1.99992 10H5.33325C5.70144 10 5.99992 10.2985 5.99992 10.6667C5.99992 11.0349 5.70144 11.3333 5.33325 11.3333H3.60929L3.96997 11.694L4.177 11.8848C5.23273 12.8112 6.59039 13.3271 8.00122 13.3327C9.41524 13.3323 10.7715 12.7714 11.7714 11.7715C12.7716 10.7713 13.3333 9.4145 13.3333 8.00001C13.3333 7.63182 13.6317 7.33334 13.9999 7.33334C14.3681 7.33334 14.6666 7.63182 14.6666 8.00001C14.6666 9.76812 13.9644 11.464 12.7141 12.7142C11.4639 13.9644 9.76803 14.6667 7.99992 14.6667H7.99731C6.26341 14.6601 4.59487 14.0253 3.29744 12.8867L3.03507 12.6445L2.66659 12.2761V14C2.66659 14.3682 2.36811 14.6667 1.99992 14.6667C1.63173 14.6667 1.33325 14.3682 1.33325 14ZM1.33325 8.00001C1.33325 6.2319 2.03548 4.53606 3.28573 3.28582C4.53597 2.03557 6.23181 1.33334 7.99992 1.33334H8.00252L8.34823 1.34311C9.95718 1.42686 11.4914 2.05058 12.7024 3.11329L12.9648 3.35548L13.3333 3.72397V2.00001C13.3333 1.63182 13.6317 1.33334 13.9999 1.33334C14.3681 1.33334 14.6666 1.63182 14.6666 2.00001V5.33334C14.6666 5.70153 14.3681 6.00001 13.9999 6.00001H10.6666C10.2984 6.00001 9.99992 5.70153 9.99992 5.33334C9.99992 4.96515 10.2984 4.66668 10.6666 4.66668H12.3905L12.0299 4.306L11.8228 4.11524C10.7669 3.18869 9.40903 2.67212 7.99797 2.66668C6.58418 2.66719 5.22817 3.22879 4.22843 4.22853C3.22824 5.22872 2.66659 6.58552 2.66659 8.00001C2.66659 8.3682 2.36811 8.66668 1.99992 8.66668C1.63173 8.66668 1.33325 8.3682 1.33325 8.00001Z" fill="white"/>
</svg>`,
};

@Component({
  selector: 'bsg-app-header',
  standalone: true,
  imports: [CommonModule, AvatarComponent],
  template: `
    <header class="app-header" [attr.role]="'banner'">
      <!-- Left Section -->
      <div class="app-header-left">
        <button
          *ngIf="showMenuButton"
          type="button"
          class="app-header-menu-btn"
          (click)="onMenuClick()"
          [attr.aria-label]="'Abrir menú'"
        >
          <span class="app-header-icon" [innerHTML]="getIconSvg('menu')"></span>
        </button>

        <h1 class="app-header-title">{{ title }}</h1>
      </div>

      <!-- Right Section -->
      <div class="app-header-right">
        <!-- Notifications Button -->
        <button
          type="button"
          class="app-header-icon-btn"
          (click)="onNotificationsClick()"
          [attr.aria-label]="'Notificaciones'"
        >
          <span class="app-header-icon" [innerHTML]="getIconSvg('bell')"></span>
        </button>

        <!-- Action Button with Refresh Icon -->
        <button
          type="button"
          class="app-header-action-btn"
          (click)="onActionClick()"
          [attr.aria-label]="actionLabel"
        >
          <span
            class="app-header-icon app-header-icon--small"
            [innerHTML]="getIconSvg('refresh')"
          ></span>
          <span class="app-header-action-label">{{ actionLabel }}</span>
        </button>

        <!-- User Profile -->
        <div class="app-header-user" *ngIf="user">
          <bsg-avatar
            [size]="'sm'"
            [type]="user.avatarImage ? 'default' : 'default'"
            [image]="user.avatarImage || ''"
          ></bsg-avatar>
          <span class="app-header-user-name">{{ user.name }}</span>
        </div>
      </div>
    </header>
  `,
  styleUrls: ['./app-header.css'],
})
export class AppHeaderComponent {
  /** Header title text */
  @Input() title: string = 'Integra CRM';

  /** Show/hide menu button */
  @Input() showMenuButton: boolean = true;

  /** User information */
  @Input() user?: AppHeaderUser;

  /** Action button label */
  @Input() actionLabel: string = 'Actualizar';

  /** Menu button click event */
  @Output() menuClick = new EventEmitter<void>();

  /** Notifications button click event */
  @Output() notificationsClick = new EventEmitter<void>();

  /** Action button click event */
  @Output() actionClick = new EventEmitter<void>();

  constructor(private sanitizer: DomSanitizer) {}

  getIconSvg(iconName: string): SafeHtml {
    const svg = icons[iconName] || '';
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  onMenuClick(): void {
    this.menuClick.emit();
  }

  onNotificationsClick(): void {
    this.notificationsClick.emit();
  }

  onActionClick(): void {
    this.actionClick.emit();
  }
}
