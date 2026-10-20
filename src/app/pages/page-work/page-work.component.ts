import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CASE_STUDIES } from '../../data/case-studies.data';

@Component({
  selector: 'app-page-work',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './page-work.component.html'
})
export class PageWorkComponent {
  protected readonly caseStudies = CASE_STUDIES;
}
