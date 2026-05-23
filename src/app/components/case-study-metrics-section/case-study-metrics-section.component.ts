import { Component, input } from '@angular/core';
import { CaseStudyMetricsSection } from '../../models/case-study.model';

@Component({
  selector: 'app-case-study-metrics-section',
  standalone: true,
  templateUrl: './case-study-metrics-section.component.html'
})
export class CaseStudyMetricsSectionComponent {
  readonly section = input.required<CaseStudyMetricsSection>();
}
