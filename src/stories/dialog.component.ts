import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

export type DialogSize = 'sm' | 'md' | 'lg';
export type DialogHeaderTone = 'brand' | 'info' | 'secondary';

@Component({
  selector: 'bsg-dialog',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Dialog Overlay -->
    <div *ngIf="open" class="dialog-overlay" [ngClass]="overlayClasses" (click)="onOverlayClick()">
      <!-- Dialog Content -->
      <div
        class="dialog-content"
        [ngClass]="contentClasses"
        (click)="$event.stopPropagation()"
        role="dialog"
        [attr.aria-modal]="true"
        [attr.aria-labelledby]="'dialog-title'"
      >
        <!-- Dialog Header -->
        <div class="dialog-header" [ngClass]="headerClasses">
          <ng-content select="[dialog-header]"></ng-content>
        </div>

        <!-- Dialog Body -->
        <div class="dialog-body" [ngClass]="bodyClasses">
          <ng-content select="[dialog-body]"></ng-content>
        </div>

        <!-- Dialog Footer -->
        <div *ngIf="hasFooter" class="dialog-footer" [ngClass]="footerClasses">
          <ng-content select="[dialog-footer]"></ng-content>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./dialog.css'],
})
export class DialogComponent {
  /** Controls dialog visibility */
  @Input() open: boolean = false;

  /** Dialog size */
  @Input() size: DialogSize = 'md';

  /** Header tone/theme */
  @Input() headerTone: DialogHeaderTone = 'brand';

  /** Enable scrollable body */
  @Input() scrollable: boolean = false;

  /** Allow dismissing via ESC or backdrop click */
  @Input() dismissible: boolean = true;

  /** Whether footer content is present */
  @Input() hasFooter: boolean = true;

  /** Close event */
  @Output() closeDialog = new EventEmitter<void>();

  get overlayClasses(): string[] {
    return ['dialog-overlay-base'];
  }

  get contentClasses(): string[] {
    return [`dialog-${this.size}`, this.scrollable ? 'dialog-scrollable' : ''].filter(Boolean);
  }

  get headerClasses(): string[] {
    return [`dialog-header-${this.headerTone}`];
  }

  get bodyClasses(): string[] {
    return [this.scrollable ? 'dialog-body-scrollable' : ''].filter(Boolean);
  }

  get footerClasses(): string[] {
    return [];
  }

  onOverlayClick(): void {
    if (this.dismissible) {
      this.close();
    }
  }

  close(): void {
    this.closeDialog.emit();
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKey(event: KeyboardEvent): void {
    if (this.open && this.dismissible) {
      event.preventDefault();
      this.close();
    }
  }
}
