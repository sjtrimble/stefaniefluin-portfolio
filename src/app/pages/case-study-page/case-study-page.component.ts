import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { CASE_STUDIES } from '../../data/case-studies.data';
import { CaseStudyHeroSectionComponent } from '../../components/case-study-hero-section/case-study-hero-section.component';
import { CaseStudyImageSectionComponent } from '../../components/case-study-image-section/case-study-image-section.component';
import { CaseStudyMetricsSectionComponent } from '../../components/case-study-metrics-section/case-study-metrics-section.component';
import { CaseStudyRichTextSectionComponent } from '../../components/case-study-rich-text-section/case-study-rich-text-section.component';

@Component({
  selector: 'app-case-study-page',
  standalone: true,
  imports: [
    RouterLink,
    CaseStudyHeroSectionComponent,
    CaseStudyRichTextSectionComponent,
    CaseStudyMetricsSectionComponent,
    CaseStudyImageSectionComponent
  ],
  templateUrl: './case-study-page.component.html'
})
export class CaseStudyPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly paramMap = toSignal(this.route.paramMap);

  protected readonly caseStudy = computed(() => {
    const slug = this.paramMap()?.get('slug');
    return CASE_STUDIES.find((entry) => entry.slug === slug);
  });
}
