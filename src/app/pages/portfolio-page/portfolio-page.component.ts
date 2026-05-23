import { Component } from '@angular/core';
import { AboutSectionComponent } from '../../components/about-section/about-section.component';
import { CtaSectionComponent } from '../../components/cta-section/cta-section.component';
import { EngineeringSectionComponent } from '../../components/engineering-section/engineering-section.component';
import { FeaturedWorkComponent } from '../../components/featured-work/featured-work.component';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { SiteFooterComponent } from '../../components/site-footer/site-footer.component';
import { SystemsSectionComponent } from '../../components/systems-section/systems-section.component';
import { TopNavbarComponent } from '../../components/top-navbar/top-navbar.component';

@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [
    TopNavbarComponent,
    HeroSectionComponent,
    FeaturedWorkComponent,
    SystemsSectionComponent,
    EngineeringSectionComponent,
    AboutSectionComponent,
    CtaSectionComponent,
    SiteFooterComponent
  ],
  templateUrl: './portfolio-page.component.html'
})
export class PortfolioPageComponent {}
