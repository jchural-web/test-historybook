import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-checkbox-maestro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkbox-maestro.component.html',
  styleUrls: ['./checkbox-maestro.component.css'],
})
export class CheckboxMaestroComponent {
  @Input() checked: boolean = false;

  @Output() checkedChange = new EventEmitter<boolean>();

  constructor(private sanitizer: DomSanitizer) {}

  toggleCheckbox(): void {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }

  getSanitizedCheckIcon(): SafeHtml {
    const svg = `<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.43096 1.76432C6.56114 1.63414 6.77214 1.63414 6.90232 1.76432C7.03249 1.89449 7.03249 2.1055 6.90232 2.23567L3.23565 5.90234C3.10548 6.03251 2.89447 6.03251 2.7643 5.90234L1.09763 4.23567C0.967456 4.1055 0.967456 3.89449 1.09763 3.76432C1.22781 3.63414 1.43881 3.63414 1.56899 3.76432L2.99997 5.19531L6.43096 1.76432Z" fill="white"/>
</svg>`;
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
}
