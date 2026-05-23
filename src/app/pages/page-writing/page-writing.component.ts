import { Component } from '@angular/core';

@Component({
  selector: 'app-page-writing',
  standalone: true,
  templateUrl: './page-writing.component.html'
})
export class PageWritingComponent {
  protected readonly articles = [
    {
      title: 'Design Systems as Product Infrastructure',
      description: 'How to treat design systems like scalable, measurable product platforms.'
    },
    {
      title: 'Bridging UX and Engineering',
      description: 'Practical patterns for design-engineering collaboration in enterprise teams.'
    },
    {
      title: 'From Components to Outcomes',
      description: 'A framework for connecting UI decisions to business and user impact.'
    }
  ];
}
