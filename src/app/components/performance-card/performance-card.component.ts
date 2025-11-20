import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-performance-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './performance-card.component.html',
  styleUrls: ['./performance-card.component.css'],
})
export class PerformanceCardComponent {
  @Input()
  title: string = 'Título de card';

  @Input()
  value: number = 0;

  @Input()
  percent: number = 0;

  @Input()
  set icon(value: string) {
    this._icon = value ? this.sanitizer.bypassSecurityTrustHtml(value) : undefined;
  }

  _icon?: SafeHtml;

  @Input()
  iconColor: string = '#7C3AED';

  constructor(private sanitizer: DomSanitizer) {}

  public get formattedPercent(): string {
    const sign = this.percent >= 0 ? '+' : '';
    return `${sign}${this.percent}%`;
  }
}
