import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-storybook-shell',
  standalone: true,
  template: `<div class="storybook-redirect">
    <p>Cargando Storybook...</p>
  </div>`,
  styles: [`
    .storybook-redirect {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      font-size: 16px;
      color: #666;
    }
  `],
})
export class StorybookShellComponent implements OnInit {
  ngOnInit(): void {
    // Replace current history entry and redirect to Storybook with path parameter
    const currentPath = window.location.pathname;
    const searchParams = new URLSearchParams(window.location.search);

    // If we're not already showing storybook path, redirect
    if (!searchParams.has('path')) {
      window.location.replace(window.location.origin + '/?path=/docs/pages-crm-page--docs');
    }
  }
}
