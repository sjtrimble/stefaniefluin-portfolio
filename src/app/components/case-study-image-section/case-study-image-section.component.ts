import { Component, input } from '@angular/core';
import { CaseStudyImageSection } from '../../models/case-study.model';

@Component({
  selector: 'app-case-study-image-section',
  standalone: true,
  templateUrl: './case-study-image-section.component.html'
})
export class CaseStudyImageSectionComponent {
  readonly section = input.required<CaseStudyImageSection>();
}
