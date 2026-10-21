import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-top-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './top-navbar.component.html'
})
export class TopNavbarComponent {
  private readonly router = inject(Router);
  protected menuOpen = false;

  protected readonly navLinks = [
    { route: '/work', label: 'Work' },
    { route: '/writing', label: 'Writing' },
    { route: '/about', label: 'About' }
  ];

  protected toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  protected closeMenu(): void {
    this.menuOpen = false;
  }

  protected isCaseStudiesActive(): boolean {
    const currentUrl = this.router.url;

    return currentUrl === '/work' || currentUrl.startsWith('/work/');
  }
}
