import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CaseStudy } from '../../models/case-study.model';

@Component({
  selector: 'app-case-study-hero-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './case-study-hero-section.component.html'
})
export class CaseStudyHeroSectionComponent {
  readonly caseStudy = input.required<CaseStudy>();
}
