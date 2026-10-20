import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteFooterComponent } from './components/site-footer/site-footer.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { HireModeService } from './shared/hire-mode.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopNavbarComponent, SiteFooterComponent],
  templateUrl: './app.html'
})
export class App {
  private readonly hireModeService = inject(HireModeService);

  protected readonly hireMode = this.hireModeService.hireMode;

  constructor() {
    this.hireModeService.setHireMode(true);
  }
}
