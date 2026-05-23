import { Component } from '@angular/core';

@Component({
  selector: 'app-systems-section',
  standalone: true,
  templateUrl: './systems-section.component.html'
})
export class SystemsSectionComponent {
  protected readonly principles = [
    {
      title: 'Token Architecture',
      description: 'Semantic scaling across typography, color, and spacing to ensure multi-brand flexibility.'
    },
    {
      title: 'WCAG Compliance',
      description: 'Building accessibility into the foundational layer, ensuring high-contrast and keyboard navigation.'
    }
  ];
}
