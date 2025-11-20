import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export interface HeaderAction {
  label: string;
  icon?: string;
  onClick?: () => void;
}

@Component({
  selector: 'app-header-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css'],
})
export class HeaderBarComponent {
  @Input()
  username: string = 'Usuario';

  @Input()
  actions: HeaderAction[] = [];

  @Input()
  appName: string = 'Integra CRM';

  @Output()
  menuClick = new EventEmitter<void>();

  constructor(private sanitizer: DomSanitizer) {}

  handleActionClick(action: HeaderAction, event: Event): void {
    event.preventDefault();
    if (action.onClick) {
      action.onClick();
    }
  }

  onMenuClick(): void {
    this.menuClick.emit();
  }

  getSafeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
