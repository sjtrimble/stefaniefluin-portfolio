import { Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  standalone: true,
  templateUrl: './about-page.component.html'
})
export class AboutPageComponent {
  protected readonly skills = ['Figma', 'Angular', 'VS Code', 'Github'];
}
