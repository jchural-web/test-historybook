import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

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

  handleActionClick(action: HeaderAction, event: Event): void {
    event.preventDefault();
    if (action.onClick) {
      action.onClick();
    }
  }
}
