import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, HostListener, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-notas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css'],
})
export class NotasComponent {
  @Input() title: string = 'Comentario Actividad';
  @Input() placeholder: string = 'Ingrese un comentario';
  @Input() maxLength: number = 500;

  @Output() commentChange = new EventEmitter<string>();

  @ViewChild('notasContainer') notasContainer!: ElementRef;

  content: string = '';
  isMinimized: boolean = false;

  private isDragging: boolean = false;
  private dragOffsetX: number = 0;
  private dragOffsetY: number = 0;

  posX: number = 20;
  posY: number = 20;

  constructor(private sanitizer: DomSanitizer) {}

  onContentChange(value: string): void {
    this.content = value;
    this.commentChange.emit(value);
  }

  toggleMinimize(): void {
    this.isMinimized = !this.isMinimized;
  }

  onHeaderMouseDown(event: MouseEvent): void {
    this.isDragging = true;
    const container = this.notasContainer?.nativeElement;
    if (container) {
      this.dragOffsetX = event.clientX - container.offsetLeft;
      this.dragOffsetY = event.clientY - container.offsetTop;
    }
    event.preventDefault();
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (this.isDragging && this.notasContainer) {
      const container = this.notasContainer.nativeElement;
      this.posX = event.clientX - this.dragOffsetX;
      this.posY = event.clientY - this.dragOffsetY;

      // Constrain to viewport
      const maxX = window.innerWidth - container.offsetWidth;
      const maxY = window.innerHeight - container.offsetHeight;

      this.posX = Math.max(0, Math.min(this.posX, maxX));
      this.posY = Math.max(0, Math.min(this.posY, maxY));

      container.style.left = this.posX + 'px';
      container.style.top = this.posY + 'px';
    }
  }

  @HostListener('document:mouseup')
  onMouseUp(): void {
    this.isDragging = false;
  }

  get containerStyle(): { [key: string]: string } {
    return {
      left: this.posX + 'px',
      top: this.posY + 'px',
    };
  }

  getSanitizedIcon(iconName: string): SafeHtml {
    const svg = this.getIconSvg(iconName);
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  private getIconSvg(iconName: string): string {
    const iconMap: { [key: string]: string } = {
      move: `<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.3165 1.32663C12.742 0.979584 13.3693 1.00406 13.7659 1.40069L17.0159 4.65069C17.439 5.07375 17.439 5.75952 17.0159 6.18259C16.5928 6.60566 15.9071 6.60566 15.484 6.18259L14.0833 4.78187V11.9166H21.2181L19.8173 10.5159C19.3943 10.0929 19.3943 9.40709 19.8173 8.98402C20.2404 8.56095 20.9262 8.56095 21.3492 8.98402L24.5992 12.234C25.0223 12.6571 25.0223 13.3429 24.5992 13.7659L21.3492 17.0159C20.9262 17.439 20.2404 17.439 19.8173 17.0159C19.3943 16.5929 19.3943 15.9071 19.8173 15.484L21.2181 14.0833H14.0833V21.2181L15.484 19.8174C15.9071 19.3943 16.5928 19.3943 17.0159 19.8174C17.439 20.2404 17.439 20.9262 17.0159 21.3493L13.7659 24.5993C13.3428 25.0223 12.6571 25.0223 12.234 24.5993L8.98401 21.3493C8.56094 20.9262 8.56094 20.2404 8.98401 19.8174C9.40708 19.3943 10.0928 19.3943 10.5159 19.8174L11.9166 21.2181V14.0833H4.78186L6.18258 15.484C6.60564 15.9071 6.60564 16.5929 6.18258 17.0159C5.75951 17.439 5.07374 17.439 4.65068 17.0159L1.40068 13.7659C0.977607 13.3429 0.977607 12.6571 1.40068 12.234L4.65068 8.98402C5.07374 8.56095 5.75951 8.56095 6.18258 8.98402C6.60564 9.40709 6.60564 10.0929 6.18258 10.5159L4.78186 11.9166H11.9166V4.78187L10.5159 6.18259C10.0928 6.60566 9.40708 6.60566 8.98401 6.18259C8.56094 5.75952 8.56094 5.07375 8.98401 4.65069L12.234 1.40069L12.3165 1.32663Z" fill="white"/>
</svg>`,
      minus: `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.5 16.5C29.3284 16.5 30 17.1716 30 18C30 18.8284 29.3284 19.5 28.5 19.5H7.5C6.67157 19.5 6 18.8284 6 18C6 17.1716 6.67157 16.5 7.5 16.5H28.5Z" fill="white"/>
</svg>`,
    };

    return iconMap[iconName] || '';
  }
}
