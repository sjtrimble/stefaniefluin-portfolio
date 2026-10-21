import { Component } from '@angular/core';
import {
  LucideLayers,
  LucideDynamicIcon,
  LucideFocus,
  LucideHeartHandshake,
  LucideSparkles,
  LucideFolderCode,
  LucideBriefcaseBusiness,
  type LucideIcon
} from '@lucide/angular';

interface Strength {
  title: string;
  description: string;
  icon: LucideIcon;
}

@Component({
  selector: 'app-why-me-section',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './why-me-section.component.html'
})
export class WhyMeSectionComponent {
  protected readonly strengths: Strength[] = [
    {
      title: 'Dual Engineering & UX Fluency',
      description:
        'My coding background helps me speak engineering\'s language, architect realistic component systems, and make handoff seamless',
      icon: LucideFolderCode
    },
    {
      title: 'Enterprise Design Systems',
      description:
        'I scale design systems like Cobalt and HIG into robust, reusable UI libraries that product teams love using.',
      icon: LucideLayers
    },
    {
      title: 'Business-Minded Leader',
      description:
        'With an MBA and operations background, I connect the dots between product design, day-to-day feasibility, and real business goals.',
      icon: LucideBriefcaseBusiness
    },
    {
      title: '18+ Years of Industry Experience',
      description:
        'My journey spans healthcare, developer tooling, insurance, and agency life, helping me navigate complex enterprise challenges with ease.',
      icon: LucideFocus
    },
    {
      title: 'Champion of Simplicity',
      description:
        'I turn dense, complicated workflows into clear, smooth, and effortless experiences where users never feel the heavy lifting.',
      icon: LucideSparkles
    },
    {
      title: 'DesignOps & Mentorship',
      description:
        'I bring designers and developers together through thoughtful critique, hands-on coaching, and a shared passion for great craft.',
      icon: LucideHeartHandshake
    }
  ];
}
