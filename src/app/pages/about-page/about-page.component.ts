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
          src: '/assets/images/stefanie-headshot.jpeg',
          alt: 'Stefanie at a hockey game'
        },
        {
          src: '/assets/images/sf-2019.png',
          alt: 'Arena lights before puck drop'
        },
        {
          src: '/assets/images/sf-2019-old.jpg',
          alt: 'Crowd energy during a game'
        }
      ]
    },
    {
      kicker: 'Always Exploring',
      title: 'Travel Adventures',
      description:
        'Travel keeps me curious. I enjoy exploring new cities, architecture, and local design culture, then bringing fresh perspective back into my work.',
      photos: [
        {
          src: '/assets/images/sf-2019-old.jpg',
          alt: 'Travel moment in the city'
        },
        {
          src: '/assets/images/sf-2019.png',
          alt: 'Street and architecture details while traveling'
        },
        {
          src: '/assets/images/stefanie-headshot.jpeg',
          alt: 'Portrait during a travel day'
        }
      ]
    }
  ];
}
