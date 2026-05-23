import { Component } from '@angular/core';

@Component({
  selector: 'app-top-navbar',
  standalone: true,
  templateUrl: './top-navbar.component.html'
})
export class TopNavbarComponent {
  protected readonly navLinks = [
    { route: '/case-study/design-system-migration-01', label: 'Case Studies', active: true },
    { href: '#systems', label: 'Systems', active: false },
    { href: '#about', label: 'About', active: false },
    { href: '#contact', label: 'Contact', active: false }
  ];
}
