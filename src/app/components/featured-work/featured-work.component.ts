import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CASE_STUDIES } from '../../data/case-studies.data';
import { CaseStudy } from '../../models/case-study.model';

interface FeaturedWorkProject extends CaseStudy {
  image: string;
  imageAlt: string;
  columnClass: string;
}

@Component({
  selector: 'app-featured-work',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './featured-work.component.html'
})
export class FeaturedWorkComponent {
  protected readonly projects: FeaturedWorkProject[] = CASE_STUDIES
    .filter((caseStudy) => caseStudy.featured)
    .map((caseStudy) => ({
      ...caseStudy,
      summary: caseStudy.summary ?? caseStudy.subtitle,
      image: caseStudy.heroImage,
      imageAlt: caseStudy.heroImageAlt,
      columnClass: 'col-4'
    }));
}
