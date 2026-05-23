import { Component } from '@angular/core';
import { CtaSectionComponent } from '../../components/cta-section/cta-section.component';
import { EngineeringSectionComponent } from '../../components/engineering-section/engineering-section.component';
import { FeaturedWorkComponent } from '../../components/featured-work/featured-work.component';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { PageAboutComponent } from '../../components/page-about/page-about.component';
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
    PageAboutComponent,
    CtaSectionComponent,
    SiteFooterComponent
  ],
  templateUrl: './portfolio-page.component.html'
})
export class PortfolioPageComponent {}
