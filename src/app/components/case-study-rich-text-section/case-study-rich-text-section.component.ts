import { Component, input } from '@angular/core';
import { CaseStudyRichTextSection } from '../../models/case-study.model';

@Component({
  selector: 'app-case-study-rich-text-section',
  standalone: true,
  templateUrl: './case-study-rich-text-section.component.html'
})
export class CaseStudyRichTextSectionComponent {
  readonly section = input.required<CaseStudyRichTextSection>();
}
