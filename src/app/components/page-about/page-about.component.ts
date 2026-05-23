import { Component } from '@angular/core';

@Component({
  selector: 'app-page-about',
  standalone: true,
  templateUrl: './page-about.component.html'
})
export class PageAboutComponent {
  protected readonly skills = ['Figma', 'Angular', 'VS Code', 'Github'];
}
