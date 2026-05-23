import { Component } from '@angular/core';

@Component({
  selector: 'app-section-references',
  standalone: true,
  templateUrl: './section-references.component.html'
})
export class SectionReferencesComponent {
  protected readonly references = [
    {
      quote:
        'Simply the best.',
      name: 'Name',
      role: 'Title @ x'
    },
    {
      quote:
        'No one like her',
      name: 'Name',
      role: 'Title @ x'
    }
  ];
}
