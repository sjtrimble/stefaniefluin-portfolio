import { Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  standalone: true,
  templateUrl: './about-page.component.html'
})
export class AboutPageComponent {
  protected readonly skills = ['Figma', 'Angular', 'VS Code', 'Github'];

  protected readonly funItems = [
    {
      kicker: 'Go Wild',
      title: 'Hockey Nights',
      description:
        'I rarely miss a Minnesota Wild game. I love the speed, strategy, and momentum swings that make hockey such a fun reset from the work week.',
      photos: [
        {
          src: '/assets/images/wild01.jpg',
          alt: 'Stefanie at a hockey game',
          caption: 'Pregame energy'
        },
        {
          src: '/assets/images/sf-2019.png',
          alt: 'Arena lights before puck drop',
          caption: 'Lights before puck drop'
        },
        {
          src: '/assets/images/sf-2019-old.jpg',
          alt: 'Crowd energy during a game',
          caption: 'Crowd in full voice'
        }
      ]
    },
    {
      kicker: 'Always Exploring',
      title: 'Travel Adventures',
      description:
        'Travel keeps me curious, and it\'s something I\'ve been doing since I can remember. I enjoy exploring new cities, architecture, and local foods.',
      photos: [
        {
          src: '/assets/images/japan.jpg',
          alt: 'Travel moment in Japan',
          caption: 'Tokyo at night'
        },
        {
          src: '/assets/images/china.JPG',
          alt: 'Street and architecture details in China',
          caption: 'Street details in Shanghai'
        },
        {
          src: '/assets/images/costarica.jpg',
          alt: 'Portrait during a travel day in Costa Rica',
          caption: 'Costa Rica coast day'
        }
      ]
    }
  ];
}
