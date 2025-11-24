import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-informacion-tabla',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './informacion-tabla.component.html',
  styleUrls: ['./informacion-tabla.component.css'],
})
export class InformacionTablaComponent {
  @Input() text: string = '';
  @Input() backgroundColor: string = '#ECFDF3';
  @Input() accentColor: string = '#16A34A';
  @Input() width?: string;
  @Input() height?: string;

  get containerStyle(): { [key: string]: string } {
    const styles: { [key: string]: string } = {};

    if (this.width) {
      styles['width'] = this.width;
    }

    if (this.height) {
      styles['height'] = this.height;
    }

    return styles;
  }

  get accentLineStyle(): { [key: string]: string } {
    return {
      'background-color': this.accentColor,
    };
  }
}
