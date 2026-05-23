import { Component } from '@angular/core';

@Component({
  selector: 'app-about-section',
  standalone: true,
  templateUrl: 'about-section.component.html'
})
export class AboutSectionComponent {
  protected readonly skills = ['Figma', 'Angular', 'VS Code', 'Github'];
}
