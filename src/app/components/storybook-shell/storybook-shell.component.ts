import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-storybook-shell',
  standalone: true,
  template: `<div style="display: flex; align-items: center; justify-content: center; height: 100vh;">
    <p>Redirigiendo a Storybook...</p>
  </div>`,
})
export class StorybookShellComponent implements OnInit {
  ngOnInit(): void {
    // Redirect to Storybook
    window.location.href = '/?path=/docs/pages-crm-page--docs';
  }
}
