import { Component } from '@angular/core';
import { AboutSectionComponent } from '../../components/about-section/about-section.component';
import { CtaSectionComponent } from '../../components/cta-section/cta-section.component';
import { EngineeringSectionComponent } from '../../components/engineering-section/engineering-section.component';
import { FeaturedWorkComponent } from '../../components/featured-work/featured-work.component';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { SiteFooterComponent } from '../../components/site-footer/site-footer.component';
import { SiteHeaderComponent } from '../../components/site-header/site-header.component';
import { SystemsSectionComponent } from '../../components/systems-section/systems-section.component';

@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [
    SiteHeaderComponent,
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
