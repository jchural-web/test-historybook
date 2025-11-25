import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

export interface AccordionItem {
  id: string | number;
  title: string;
}

@Component({
  selector: 'app-accordion-maestro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion-maestro.component.html',
  styleUrls: ['./accordion-maestro.component.css'],
})
export class AccordionMaestroComponent implements OnInit {
  @Input() items: AccordionItem[] = [];
  @Input() activeItemId?: string | number | null;
  @Output() activeItemChange = new EventEmitter<string | number | null>();

  private _activeItemId: string | number | null = null;

  ngOnInit(): void {
    this._activeItemId = this.activeItemId ?? null;
  }

  toggleItem(itemId: string | number): void {
    if (this._activeItemId === itemId) {
      this._activeItemId = null;
    } else {
      this._activeItemId = itemId;
    }
    this.activeItemChange.emit(this._activeItemId);
  }

  isItemActive(itemId: string | number): boolean {
    return this._activeItemId === itemId;
  }
}
