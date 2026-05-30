import { Component } from '@angular/core';
import { CtaSectionComponent } from '../../components/cta-section/cta-section.component';
import { EngineeringSectionComponent } from '../../components/engineering-section/engineering-section.component';
import { FeaturedWorkComponent } from '../../components/featured-work/featured-work.component';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { AboutPageComponent } from '../about-page/about-page.component';
import { SectionReferencesComponent } from '../../components/section-references/section-references.component';
import { SystemsSectionComponent } from '../../components/systems-section/systems-section.component';

@Component({
  selector: 'app-page-home',
  standalone: true,
  imports: [
    HeroSectionComponent,
    FeaturedWorkComponent,
    SystemsSectionComponent,
    EngineeringSectionComponent,
    AboutPageComponent,
    SectionReferencesComponent,
    CtaSectionComponent
  ],
  templateUrl: './page-home.component.html'
})
export class PageHomeComponent {}
