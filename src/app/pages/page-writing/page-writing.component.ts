import { Component } from '@angular/core';

@Component({
  selector: 'app-page-writing',
  standalone: true,
  templateUrl: './page-writing.component.html'
})
export class PageWritingComponent {
  protected readonly articles = [
    {
      title: 'The Pyramid Design Token Structure: The Best Way to Format, Organize, and Name Your Design Tokens',
      description: 'Guide to optimize your design system structure.',
      link: 'https://medium.com/@stefaniefluin/the-pyramid-design-token-structure-the-best-way-to-format-organize-and-name-your-design-tokens-ca81b9d8836d'
    },
    {
      title: 'The New SASS Module System: Out with @import, In with @use',
      description: 'Engineering guide to the new SASS module system and how to transition from @import to @use.',
      link: 'https://medium.com/@stefaniefluin/the-new-sass-module-system-out-with-import-in-with-use-e1bd8ba032d0'
    },
    {
      title: 'How to Structure SCSS in an Angular App',
      description: 'SCSS setup for Angular applications.',
      link: 'https://medium.com/@stefaniefluin/how-to-structure-scss-in-an-angular-app-a1b8a759a028'
    },
    {
      title: 'Quick Guide to Angular Schematics: How I Built My First Schematic',
      description: 'Step-by-step guide to creating your first Angular schematic.',
      link: 'https://medium.com/@stefaniefluin/quick-guide-to-angular-schematics-how-i-built-my-first-schematic-2c81a486dd3a'
    }
  ];
}
