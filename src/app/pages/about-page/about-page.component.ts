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
          src: '/assets/images/wild-spirit.jpg',
          alt: 'At a Wild hockey game holding a puck',
          caption: 'Playoffs games are the best'
        },
        {
          src: '/assets/images/wild01.jpg',
          alt: 'Grand Casino Arena hockey',
          caption: 'The beauty of fresh ice'
        },
        {
          src: '/assets/images/skating.jpg',
          alt: 'Standing on the Grand Casino Arena ice',
          caption: 'Attempting to learn to play hockey'
        },
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
          caption: 'Tokyo temple'
        },
        {
          src: '/assets/images/china.JPG',
          alt: 'Street and architecture details in China',
          caption: 'Zhujiajiao ancient watertown'
        },
        {
          src: '/assets/images/costarica.jpg',
          alt: 'Portrait during a travel day in Costa Rica',
          caption: 'Costa Rica Tamarindo sunset'
        }
      ]
    }
  ];
}
