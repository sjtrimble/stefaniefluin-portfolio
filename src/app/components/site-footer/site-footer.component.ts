import { Component } from '@angular/core';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  templateUrl: './site-footer.component.html'
})
export class SiteFooterComponent {
  protected readonly links = [
    { href: '#', label: 'LinkedIn' },
    { href: '#', label: 'Read.cv' },
    { href: 'mailto:hello@example.com', label: 'Email' },
    { href: '#', label: 'Source Code' }
  ];
}
