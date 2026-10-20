import { Component } from '@angular/core';

type WritingArticle = {
  title: string;
  description: string;
  link: string;
  image: string;
  imageAlt?: string;
};

type WritingArticleCard = WritingArticle & {
  domain: string;
};

@Component({
  selector: 'app-page-writing',
  standalone: true,
  templateUrl: './page-writing.component.html'
})
export class PageWritingComponent {
  private readonly articles: WritingArticle[] = [
    {
      title: 'The Pyramid Design Token Structure: The Best Way to Format, Organize, and Name Your Design Tokens',
      description: 'Guide to optimize your design system structure.',
      link: 'https://medium.com/@stefaniefluin/the-pyramid-design-token-structure-the-best-way-to-format-organize-and-name-your-design-tokens-ca81b9d8836d',
      image: 'assets/images/writing-pyramid.webp',
      imageAlt: 'Abstract geometric illustration for design token systems'
    },
    {
      title: 'The New SASS Module System: Out with @import, In with @use',
      description: 'Engineering guide to the new SASS module system and how to transition from @import to @use.',
      link: 'https://medium.com/@stefaniefluin/the-new-sass-module-system-out-with-import-in-with-use-e1bd8ba032d0',
      image: 'assets/images/writing-scss.webp',
      imageAlt: 'Code editor themed illustration for Sass module migration'
    },
    {
      title: 'How to Structure SCSS in an Angular App',
      description: 'SCSS setup for Angular applications.',
      link: 'https://medium.com/@stefaniefluin/how-to-structure-scss-in-an-angular-app-a1b8a759a028',
      image: 'assets/images/writing-ng-scss.webp',
      imageAlt: 'Angular and stylesheet architecture concept image'
    },
    {
      title: 'Quick Guide to Angular Schematics: How I Built My First Schematic',
      description: 'Step-by-step guide to creating your first Angular schematic.',
      link: 'https://medium.com/@stefaniefluin/quick-guide-to-angular-schematics-how-i-built-my-first-schematic-2c81a486dd3a',
      image: 'assets/images/writing-ng-schematics.webp',
      imageAlt: 'Angular schematics visual reference'
    }
  ];

  protected readonly articleCards: WritingArticleCard[] = this.articles.map((article) => ({
    ...article,
    domain: this.extractDomain(article.link)
  }));

  private extractDomain(link: string): string {
    try {
      return new URL(link).hostname.replace(/^www\./, '');
    } catch {
      return 'Article';
    }
  }
}
