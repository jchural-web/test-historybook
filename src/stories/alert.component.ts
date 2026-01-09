import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export type AlertVariant = 'default' | 'info' | 'success' | 'warning' | 'destructive';

@Component({
  selector: 'bsg-alert',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      *ngIf="!dismissed"
      class="alert"
      [ngClass]="alertClasses"
      [attr.role]="'alert'"
    >
      <!-- Icon -->
      <svg
        *ngIf="variant === 'default'"
        class="alert-icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.2904 1.13038C12.7758 0.738816 15.3201 1.21183 17.4994 2.46924C17.9776 2.74518 18.1423 3.35617 17.8666 3.83448C17.5906 4.31285 16.9788 4.4767 16.5004 4.20069C14.7174 3.17195 12.6354 2.78567 10.602 3.10596C8.5685 3.42633 6.70596 4.43431 5.32559 5.96143C3.94523 7.48862 3.12994 9.44313 3.01602 11.4985C2.90213 13.554 3.49639 15.587 4.69961 17.2573C5.90283 18.9276 7.64271 20.1352 9.62832 20.6782C11.6139 21.2212 13.726 21.0672 15.6117 20.2417C17.4976 19.4162 19.0436 17.9684 19.9916 16.1411C20.9395 14.3139 21.2317 12.2168 20.8207 10.1997C20.7105 9.65867 21.06 9.13044 21.601 9.02003C22.1421 8.90976 22.6704 9.25918 22.7807 9.8003C23.283 12.2657 22.9247 14.8286 21.766 17.062C20.6073 19.2954 18.7184 21.0647 16.4135 22.0737C14.1087 23.0826 11.5277 23.2705 9.10098 22.6069C6.67406 21.9432 4.54717 20.4678 3.07656 18.4263C1.60598 16.3847 0.879785 13.9004 1.01895 11.3882C1.15814 8.87595 2.15504 6.48722 3.84219 4.62061C5.52932 2.75412 7.80509 1.52194 10.2904 1.13038ZM21.2934 3.29249C21.6839 2.90241 22.317 2.90215 22.7074 3.29249C23.0979 3.68301 23.0979 4.317 22.7074 4.70753L12.7074 14.7075C12.317 15.0978 11.6839 15.0976 11.2934 14.7075L8.29336 11.7075C7.90284 11.317 7.90284 10.683 8.29336 10.2925C8.6839 9.90241 9.31704 9.90215 9.70742 10.2925L12.0004 12.5855L21.2934 3.29249Z"
          [attr.fill]="iconColor"
        />
      </svg>

      <svg
        *ngIf="variant === 'info'"
        class="alert-icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
          [attr.stroke]="iconColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <svg
        *ngIf="variant === 'success'"
        class="alert-icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 6L9 17L4 12"
          [attr.stroke]="iconColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <svg
        *ngIf="variant === 'warning'"
        class="alert-icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.0001 9V13M12.0001 17H12.0101M21.7301 18L13.7301 4C13.5556 3.6922 13.3027 3.43618 12.997 3.25806C12.6913 3.07995 12.3438 2.9861 11.9901 2.9861C11.6363 2.9861 11.2888 3.07995 10.9831 3.25806C10.6774 3.43618 10.4245 3.6922 10.2501 4L2.25005 18C2.07373 18.3054 1.98128 18.6519 1.98206 19.0045C1.98284 19.3571 2.07683 19.7032 2.2545 20.0078C2.43217 20.3124 2.6872 20.5646 2.99375 20.7388C3.30029 20.9131 3.64746 21.0032 4.00005 21H20.0001C20.351 20.9996 20.6956 20.907 20.9993 20.7313C21.3031 20.5556 21.5553 20.3031 21.7306 19.9991C21.9059 19.6951 21.9981 19.3504 21.998 18.9995C21.9979 18.6486 21.9055 18.3039 21.7301 18Z"
          [attr.stroke]="iconColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <svg
        *ngIf="variant === 'destructive'"
        class="alert-icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.929 4.929L19.07 19.071M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
          [attr.stroke]="iconColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <!-- Content -->
      <span class="alert-content">{{ content }}</span>

      <!-- Close button (only if dismissible) -->
      <button
        *ngIf="dismissible"
        type="button"
        class="alert-close"
        (click)="dismiss()"
        [attr.aria-label]="'Close alert'"
      >
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.02459 0.167369C7.24775 -0.0557898 7.60947 -0.0557898 7.83263 0.167369C8.05579 0.390529 8.05579 0.752255 7.83263 0.975414L4.80804 4L7.83263 7.02459C8.05579 7.24775 8.05579 7.60947 7.83263 7.83263C7.60947 8.05579 7.24775 8.05579 7.02459 7.83263L4 4.80804L0.975414 7.83263C0.752255 8.05579 0.390529 8.05579 0.167369 7.83263C-0.0557898 7.60947 -0.0557898 7.24775 0.167369 7.02459L3.19196 4L0.167369 0.975414C-0.0557898 0.752255 -0.0557898 0.390529 0.167369 0.167369C0.390529 -0.0557898 0.752255 -0.0557898 0.975414 0.167369L4 3.19196L7.02459 0.167369Z"
            [attr.fill]="iconColor"
          />
        </svg>
      </button>
    </div>
  `,
  styleUrls: ['./alert.css'],
})
export class AlertComponent {
  /** Alert variant */
  @Input() variant: AlertVariant = 'default';

  /** Whether the alert can be dismissed */
  @Input() dismissible: boolean = false;

  /** Alert message content */
  @Input() content: string = 'Componente de alerta Default';

  /** Dismiss event */
  @Output() onDismiss = new EventEmitter<void>();

  /** Internal dismissed state */
  dismissed: boolean = false;

  get alertClasses(): string[] {
    return [`alert-${this.variant}`];
  }

  get iconColor(): string {
    const colorMap = {
      default: '#0284C7',    // Sky-600
      info: '#2563EB',       // Blue-600
      success: '#16A34A',    // Green-600
      warning: '#CA8A04',    // Yellow-600
      destructive: '#DC2626' // Red-600
    };
    return colorMap[this.variant];
  }

  dismiss(): void {
    this.dismissed = true;
    this.onDismiss.emit();
  }
}
