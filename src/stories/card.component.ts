import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export type CardVariant = 'default' | 'elevated' | 'outlined';
export type CardState = 'default' | 'hover';
export type CardContentVariant = 'default' | 'metric' | 'infoDate' | 'infoCurrency' | 'placeholder';

// Icon for infoCurrency variant (circle-dollar-sign from lucide)
const currencyIcon = `<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_currency)">
<path d="M18.375 10.5C18.375 6.15076 14.8492 2.625 10.5 2.625C6.15076 2.625 2.625 6.15076 2.625 10.5C2.625 14.8492 6.15076 18.375 10.5 18.375C14.8492 18.375 18.375 14.8492 18.375 10.5ZM13.125 12.25C13.125 12.0179 13.0327 11.7954 12.8687 11.6313C12.7046 11.4673 12.4821 11.375 12.25 11.375H11.375V13.125H12.25C12.4821 13.125 12.7046 13.0327 12.8687 12.8687C13.0327 12.7046 13.125 12.4821 13.125 12.25ZM14.875 12.25C14.875 12.9462 14.5982 13.6137 14.106 14.106C13.6137 14.5982 12.9462 14.875 12.25 14.875H11.375V15.75C11.375 16.2332 10.9832 16.625 10.5 16.625C10.0168 16.625 9.625 16.2332 9.625 15.75V14.875H7C6.51675 14.875 6.125 14.4832 6.125 14C6.125 13.5168 6.51675 13.125 7 13.125H9.625V11.375H8.75C8.05381 11.375 7.38633 11.0982 6.89404 10.606C6.46337 10.1753 6.19754 9.61057 6.13782 9.00977L6.125 8.75C6.125 8.05381 6.40176 7.38633 6.89404 6.89404C7.38633 6.40176 8.05381 6.125 8.75 6.125H9.625V5.25C9.625 4.76675 10.0168 4.375 10.5 4.375C10.9832 4.375 11.375 4.76675 11.375 5.25V6.125H14C14.4832 6.125 14.875 6.51675 14.875 7C14.875 7.48325 14.4832 7.875 14 7.875H11.375V9.625H12.25C12.9462 9.625 13.6137 9.90176 14.106 10.394C14.5982 10.8863 14.875 11.5538 14.875 12.25ZM20.125 10.5C20.125 15.8157 15.8157 20.125 10.5 20.125C5.18426 20.125 0.875 15.8157 0.875 10.5C0.875 5.18426 5.18426 0.875 10.5 0.875C15.8157 0.875 20.125 5.18426 20.125 10.5ZM7.87927 8.8363C7.89913 9.03668 7.98772 9.22503 8.13135 9.36865C8.29544 9.53275 8.51794 9.625 8.75 9.625H9.625V7.875H8.75C8.51794 7.875 8.29544 7.96725 8.13135 8.13135C7.96725 8.29544 7.875 8.51794 7.875 8.75L7.87927 8.8363Z" fill="#2563EB"/>
</g>
<defs>
<clipPath id="clip0_currency">
<rect width="21" height="21" fill="white"/>
</clipPath>
</defs>
</svg>`;

@Component({
  selector: 'storybook-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card" [ngClass]="cardClasses" [attr.data-state]="state">
      <!-- DEFAULT Content Variant (original card) -->
      <ng-container *ngIf="contentVariant === 'default'">
        <!-- Header Row with icons -->
        <div class="card-header-row">
          <div class="card-header">
            {{ header }}
          </div>

          <!-- Info Icon -->
          <svg
            class="card-info-icon"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_info)">
              <path
                d="M14.875 8.5C14.875 4.97919 12.0208 2.125 8.49999 2.125C4.97918 2.125 2.12499 4.97919 2.12499 8.5C2.12499 12.0208 4.97918 14.875 8.49999 14.875C12.0208 14.875 14.875 12.0208 14.875 8.5ZM7.79166 11.3333V8.5C7.79166 8.1088 8.10879 7.79167 8.49999 7.79167C8.8912 7.79167 9.20833 8.1088 9.20833 8.5V11.3333C9.20833 11.7245 8.8912 12.0417 8.49999 12.0417C8.10879 12.0417 7.79166 11.7245 7.79166 11.3333ZM8.50691 4.95834C8.89811 4.95834 9.21525 5.27547 9.21525 5.66667C9.21525 6.05787 8.89811 6.375 8.50691 6.375H8.49999C8.10879 6.375 7.79166 6.05787 7.79166 5.66667C7.79166 5.27547 8.10879 4.95834 8.49999 4.95834H8.50691ZM16.2917 8.5C16.2917 12.8032 12.8032 16.2917 8.49999 16.2917C4.19678 16.2917 0.708328 12.8032 0.708328 8.5C0.708328 4.19678 4.19678 0.708336 8.49999 0.708336C12.8032 0.708336 16.2917 4.19678 16.2917 8.5Z"
                fill="#B0B6BF"
              />
            </g>
            <defs>
              <clipPath id="clip0_info">
                <rect width="17" height="17" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <!-- Action Icon (optional) -->
          <svg
            *ngIf="icon === 'phone'"
            class="card-action-icon"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_phone)">
              <path
                d="M6.66668 3.33334C6.66668 3.11232 6.57882 2.90042 6.42254 2.74414C6.28575 2.60736 6.10637 2.52298 5.91554 2.50407L5.83334 2.5H3.33334C3.11233 2.5 2.90043 2.58786 2.74415 2.74414C2.58787 2.90042 2.50001 3.11232 2.50001 3.33334C2.50001 7.09057 3.99282 10.6937 6.64959 13.3504C9.30635 16.0072 12.9094 17.5 16.6667 17.5C16.8877 17.5 17.0996 17.4121 17.2559 17.2559C17.4122 17.0996 17.5 16.8877 17.5 16.6667V14.1667C17.5 13.9457 17.4122 13.7338 17.2559 13.5775C17.0996 13.4212 16.8877 13.3333 16.6667 13.3333H14.1667C14.0373 13.3333 13.9097 13.3634 13.794 13.4212C13.6782 13.4791 13.5778 13.5635 13.5002 13.667L13.4961 13.6727L13.1999 14.0584C12.9705 14.3597 12.646 14.5745 12.2787 14.6663C11.9112 14.7581 11.5234 14.7218 11.1792 14.5638C11.1728 14.5608 11.166 14.558 11.1597 14.5549C8.67977 13.3377 6.67275 11.3333 5.45248 8.85498L5.45086 8.85173C5.28225 8.50579 5.23852 8.11213 5.32716 7.73763C5.41587 7.36306 5.63158 7.0305 5.93751 6.79688L5.94321 6.79281L6.33302 6.49984C6.43652 6.42222 6.52093 6.32177 6.57879 6.20606C6.63664 6.09035 6.66668 5.96271 6.66668 5.83334V3.33334ZM8.33334 5.83334C8.33334 6.22145 8.24324 6.60436 8.06967 6.9515C7.8961 7.29864 7.64367 7.60079 7.33318 7.83366L6.94825 8.12093C8.00265 10.2613 9.73471 11.9931 11.8742 13.0485L12.1664 12.6668L12.2575 12.5529C12.476 12.2944 12.7449 12.0822 13.0485 11.9303C13.3957 11.7568 13.7786 11.6667 14.1667 11.6667H16.6667C17.3297 11.6667 17.9654 11.9303 18.4343 12.3991C18.9031 12.8679 19.1667 13.5036 19.1667 14.1667V16.6667C19.1667 17.3297 18.9031 17.9654 18.4343 18.4343C17.9654 18.9031 17.3297 19.1667 16.6667 19.1667C7.83286 19.1667 0.666672 12.0005 0.666672 3.16667C0.666672 2.50363 0.930298 1.8679 1.39913 1.39907C1.86797 0.930233 2.5037 0.666607 3.16674 0.666607H5.66674C6.32978 0.666607 6.96551 0.930233 7.43435 1.39907C7.90319 1.8679 8.16681 2.50363 8.16681 3.16667V5.66667L8.15939 5.80347C8.06758 6.25578 7.84014 6.66666 7.51014 6.98316L7.40014 7.08316C7.40014 7.08316 7.40014 7.08316 7.40014 7.08316Z"
                fill="#9333EA"
              />
            </g>
            <defs>
              <clipPath id="clip0_phone">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>

        <!-- Value -->
        <div class="card-value">
          {{ value }}
        </div>

        <!-- Helper Row -->
        <div class="card-helper-row">
          <div class="card-helper">
            {{ helper }}
          </div>
          <div class="card-helper-description">
            {{ helperDescription }}
          </div>
        </div>
      </ng-container>

      <!-- METRIC Content Variant -->
      <ng-container *ngIf="contentVariant === 'metric'">
        <div class="card-metric-title">
          {{ metricTitle }}
        </div>
        <div class="card-metric-value">
          {{ metricValue }}
        </div>
      </ng-container>

      <!-- INFO DATE Content Variant -->
      <ng-container *ngIf="contentVariant === 'infoDate'">
        <div class="card-info-label">
          {{ dateLabel }}
        </div>
        <div class="card-info-text">
          {{ dateText }}
        </div>
      </ng-container>

      <!-- INFO CURRENCY Content Variant -->
      <ng-container *ngIf="contentVariant === 'infoCurrency'">
        <div class="card-currency-label">
          {{ currencyLabel }}
        </div>
        <div class="card-currency-content">
          <span class="card-currency-icon" [innerHTML]="getCurrencyIcon()"></span>
          <span class="card-currency-text">{{ currencyText }}</span>
        </div>
      </ng-container>

      <!-- PLACEHOLDER Content Variant (empty) -->
      <!-- No content, just the card container with placeholder class -->
    </div>
  `,
  styleUrls: ['./card.css'],
})
export class CardComponent {
  constructor(private sanitizer: DomSanitizer) {}

  /** Card variant */
  @Input() variant: CardVariant = 'default';

  /** Card state (visual only) */
  @Input() state: CardState = 'default';

  /** Content variant (NEW: tipo de contenido del card) */
  @Input() contentVariant: CardContentVariant = 'default';

  // Props for 'metric' contentVariant
  /** Title for metric variant */
  @Input() metricTitle: string = '';

  /** Value for metric variant */
  @Input() metricValue: string | number = '';

  // Props for 'infoDate' contentVariant
  /** Label for infoDate variant */
  @Input() dateLabel: string = '';

  /** Date text for infoDate variant */
  @Input() dateText: string = '';

  // Props for 'infoCurrency' contentVariant
  /** Label for infoCurrency variant */
  @Input() currencyLabel: string = '';

  /** Currency text for infoCurrency variant */
  @Input() currencyText: string = '';

  // Props for 'default' contentVariant (original card)
  /** Header text */
  @Input() header: string = 'Actividades Totales';

  /** Main value */
  @Input() value: string | number = '21';

  /** Helper text (e.g., percentage change) */
  @Input() helper: string = '+15.2%';

  /** Optional icon */
  @Input() icon: string = 'phone';

  /** Helper description text */
  @Input() helperDescription: string = 'respecto al mes anterior';

  get cardClasses(): string[] {
    const classes = [`card-${this.variant}`, `card-content-${this.contentVariant}`];

    if (this.state === 'hover') {
      classes.push('card-hover');
    }

    return classes;
  }

  getCurrencyIcon(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(currencyIcon);
  }
}
