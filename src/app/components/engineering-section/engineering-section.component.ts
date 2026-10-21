import { Component } from '@angular/core';

@Component({
  selector: 'app-engineering-section',
  standalone: true,
  templateUrl: './engineering-section.component.html'
})
export class EngineeringSectionComponent {
  protected readonly pillars = [
    {
      title: 'Component APIs',
      description:
        'Collaborating on React/Vue prop structures before pushing pixels to ensure components are logical, reusable, and state-driven.'
    },
    {
      title: 'Version Control',
      description:
        'Treating design as code. Using branched workflows, semantic versioning, and rigorous QA processes for system updates.'
    },
    {
      title: 'Performance',
      description:
        'Balancing visual fidelity with technical constraints. Optimizing assets and reducing DOM complexity for faster load times.'
    }
  ];
}
