import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type AvatarType = 'default' | 'fallback';

@Component({
  selector: 'bsg-avatar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Fallback Type: Initials -->
    <div
      *ngIf="type === 'fallback'"
      class="avatar avatar-fallback"
      [ngClass]="avatarClasses"
      [attr.role]="'img'"
      [attr.aria-label]="'Avatar with initials ' + initials"
    >
      <span class="avatar-initials">{{ initials }}</span>
    </div>

    <!-- Default Type: Image or Icon -->
    <div
      *ngIf="type === 'default' && !image"
      class="avatar avatar-default"
      [ngClass]="avatarClasses"
      [attr.role]="'img'"
      [attr.aria-label]="'User avatar'"
    >
      <!-- User Icon SVG - scaled per size -->
      <svg
        class="avatar-icon"
        [attr.viewBox]="iconViewBox"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle [attr.cx]="iconCenter" [attr.cy]="iconCenter" [attr.r]="iconCenter" fill="white" />
        <circle
          [attr.cx]="iconCenter"
          [attr.cy]="headCenterY"
          [attr.r]="headRadius"
          fill="#EAB308"
        />
        <path [attr.d]="bodyPath" fill="#EAB308" />
      </svg>
    </div>

    <!-- Default Type: Image -->
    <div
      *ngIf="type === 'default' && image"
      class="avatar avatar-image"
      [ngClass]="avatarClasses"
      [attr.role]="'img'"
      [attr.aria-label]="'User avatar'"
    >
      <img [src]="image" [alt]="'User avatar'" class="avatar-img" />
    </div>
  `,
  styleUrls: ['./avatar.css'],
})
export class AvatarComponent {
  /** Avatar size */
  @Input() size: AvatarSize = 'md';

  /** Avatar type */
  @Input() type: AvatarType = 'default';

  /** Initials text (only for fallback type) */
  @Input() initials: string = 'JC';

  /** Image URL (only for default type) */
  @Input() image: string = '';

  get avatarClasses(): string[] {
    return [`avatar-${this.size}`];
  }

  // SVG geometry calculations based on size
  get dimensions(): number {
    const sizeMap: Record<AvatarSize, number> = {
      xs: 24,
      sm: 32,
      md: 40,
      lg: 48,
      xl: 64,
    };
    return sizeMap[this.size];
  }

  get iconViewBox(): string {
    const dim = this.dimensions;
    return `0 0 ${dim} ${dim}`;
  }

  get iconCenter(): number {
    return this.dimensions / 2;
  }

  // Head circle position and radius (based on Figma proportions)
  get headCenterY(): number {
    const ratios: Record<AvatarSize, number> = {
      xs: 9.75, // 9.75/24 = 0.40625
      sm: 13, // 13/32 = 0.40625
      md: 16.25, // 16.25/40 = 0.40625
      lg: 19.5, // 19.5/48 = 0.40625
      xl: 26, // 26/64 = 0.40625
    };
    return ratios[this.size];
  }

  get headRadius(): number {
    const ratios: Record<AvatarSize, number> = {
      xs: 5.25, // 5.25/24 = 0.21875
      sm: 7, // 7/32 = 0.21875
      md: 8.75, // 8.75/40 = 0.21875
      lg: 10.5, // 10.5/48 = 0.21875
      xl: 14, // 14/64 = 0.21875
    };
    return ratios[this.size];
  }

  // Body path (from Figma SVG, scaled per size)
  get bodyPath(): string {
    const paths: Record<AvatarSize, string> = {
      xs: 'M12.0039 15.75C15.6502 15.75 18.9921 17.0517 21.5918 19.2148C19.4018 22.1206 15.9228 24 12.0039 24C8.08479 24 4.60503 22.1208 2.41504 19.2148C5.01478 17.0514 8.35733 15.75 12.0039 15.75Z',
      sm: 'M16.0039 21C20.8658 21 25.3218 22.7357 28.7881 25.6201C25.8681 29.4944 21.2291 32 16.0039 32C10.7785 32 6.13874 29.4947 3.21875 25.6201C6.68509 22.7354 11.1417 21 16.0039 21Z',
      md: 'M20.0039 26.25C26.0814 26.25 31.6515 28.4197 35.9844 32.0254C32.3344 36.8682 26.5354 40 20.0039 40C13.4725 40 7.67346 36.8682 4.02344 32.0254C8.3563 28.4197 13.9264 26.25 20.0039 26.25Z',
      lg: 'M24.0039 31.5C31.2968 31.5 37.9813 34.103 43.1807 38.4297C38.8007 44.2414 31.8419 48 24.0039 48C16.1659 48 9.20715 44.2414 4.82715 38.4297C10.0265 34.103 16.711 31.5 24.0039 31.5Z',
      xl: 'M32.0078 42C41.7319 42 50.6445 45.4711 57.5771 51.2402C51.7371 58.9891 42.4584 64 32.0078 64C21.557 64 12.2775 58.9893 6.4375 51.2402C13.3702 45.4708 22.2834 42 32.0078 42Z',
    };
    return paths[this.size];
  }
}
