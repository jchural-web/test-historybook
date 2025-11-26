import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-storybook-shell',
  standalone: true,
  template: `<iframe 
    [src]="storybookUrl" 
    class="storybook-iframe"
    title="Storybook"
  ></iframe>`,
  styles: [`
    .storybook-iframe {
      width: 100%;
      height: 100vh;
      border: none;
    }
  `],
})
export class StorybookShellComponent implements OnInit {
  storybookUrl = 'iframe.html?path=/docs/pages-crm-page--docs';

  ngOnInit(): void {
    // Component initialization
  }
}
