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
        'Stefanie joined our team as we sought expertise in advancing design/design systems and helping us create a design system strategy that we could leverage to help gain broader adoption across our enterprise. \n She was a phenomenal thought partner taking the time to understand our business, our technology and then help us create new designs that set us apart.  I can\'t thank Stefanie enough for the time she put in, but more important for helping us think different and get better as a design team.',
      name: 'Milton Jackson',
      role: 'Director, User Experience Design @ The Hartford'
    },
    {
      quote:
        'The work that Stefanie did with and for our team was instrumental in our project\'s short term success and our team\'s long term success. \n Stefanie blended her technical deliveries with solid UX recommendations, sound technical guidance, individual mentoring, and overall design leadership. She communicates with us well, sets clear expectations, and pushed us towards better organization and habits.',
      name: 'Cobbie Behrend',
      role: 'CTO @ Saeidan'
    }
  ];
}
