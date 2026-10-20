import { Component, inject } from '@angular/core';
import { HireModeService } from '../../shared/hire-mode.service';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  templateUrl: './site-footer.component.html'
})
export class SiteFooterComponent {
  private readonly hireModeService = inject(HireModeService);

  protected readonly links = [
    { href: 'https://www.linkedin.com/in/stefaniefluin/', label: 'LinkedIn' },
    { href: 'mailto:sjtrimble@gmail.com', label: 'Email' },
    { href: '/newsletter', label: 'Newsletter' }
  ];

  protected readonly hireMode = this.hireModeService.hireMode;
}
