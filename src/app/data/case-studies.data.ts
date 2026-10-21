import { CaseStudy } from '../models/case-study.model';

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'surepayroll',
    featured: true,
    title: 'Surepayroll Onboarding Experience',
    summary:
      'Redesigned the online customer enrollment experience for SurePayroll, focusing on streamlining the onboarding process and improving conversion rates.',
    subtitle: 'Redesigning the online customer enrollment experience.',
    client: 'SurePayroll',
    role: 'UX Design Lead and UX Engineer',
    tags: ['UX Design', 'Onboarding'],
    heroImage:
      '../assets/images/work/surepayroll-onboarding.png',
    heroImageAlt: 'Design system migration project visual',
    sections: [
      {
        type: 'rich-text',
        kicker: 'Project Summary',
        heading: 'Project summary',
        body: [
          'The goal of this project was to create a new and improved streamlined onboarding experience for SurePayroll\'s small business customers. The primary focus was to increase the conversion rate and update the UI and aesthetics to a more modern look and feel.',
          'The primary challenge of this project was that payroll accounting is a very complex system with lots of rules, regulations, and exceptions. Providing a seamless experience to the user while navigating the payroll intricacies smoothly was something we aimed to provide in the design and experience.'
        ]
      },
      {
        type: 'rich-text',
        kicker: 'The Challenge',
        heading: 'The challenge',
        body: [
          'There were branding and design constraints to consider as SurePayroll wanted to refresh their outdated experience while remaining similar enough to their branding guidelines at the time.',
          'The new flow needed to feel approachable and modern without overwhelming users with the complexity behind payroll rules, compliance, and customer exceptions.'
        ]
      },
      {
        type: 'image',
        heading: 'Low-fidelity wireframes',
        image: '../assets/images/work/sp-lf-wireframes.png',
        imageAlt: 'SurePayroll onboarding low fidelity wireframes workflow screenshot from Adobe XD',
        caption: 'The project kicked off with a week-long discovery phase that included technical interviews, subject matter expert sessions, and executive workshops. Once the goals and payroll accounting caveats were established, I produced low-fidelity wireframes and a clickable prototype to demonstrate the user flow of the new onboarding experience.'
      },
      {
        type: 'rich-text',
        kicker: 'The Solution',
        heading: 'The solution',
        body: [
          'Immersive on-site workshops brought together management, stakeholders, and subject matter experts to understand the existing onboarding experience, goals, desires, and payer complexity.',
          'The design direction focused on simplifying decision points, clarifying next steps, and creating a more modern visual language that still felt aligned with SurePayroll\'s brand.',
          'The final system included updated typography, colors, and core components such as buttons, alerts, badges, and more, making the experience feel consistent and easier to navigate.'
        ]
      },
      {
        type: 'image',
        heading: 'Design system',
        image: '../assets/images/work/sp-design-system.png',
        imageAlt: 'SurePayroll design system document pages',
        caption: 'A design system that stayed close to the existing visual framework while modernizing the experience for onboarding flows and core interactions.'
      },
      {
        type: 'metrics',
        heading: 'Results',
        items: [
          {
            label: 'Conversion',
            value: '+24%',
            detail: 'Increase in overall onboarding conversion rates.'
          },
          {
            label: 'Complex history customers',
            value: '+7.3%',
            detail: 'Increase in conversion for customers with complex payroll history.'
          }
        ]
      },
      {
        type: 'rich-text',
        kicker: 'Impact',
        heading: 'A material impact',
        body: [
          'The redesigned experience gave small business customers a clearer path through enrollment while reducing the complexity of payroll setup and onboarding.',
          'I\'m grateful for this opportunity and having had the chance to have a material impact through the application of human-centered design.'
        ]
      }
    ]
  },
  {
    slug: 'angular',
    featured: true,
    title: 'Official Angular Website',
    summary:
      'An easy-to-use website tailored to a technical user base.',
    subtitle: 'An easy-to-use website tailored to a technical user base.',
    client: 'Angular',
    role: 'UX Lead and Engineer',
    tags: ['UX Design', 'Technical Documentation', 'Design Systems'],
    heroImage:
      '../assets/images/work/case-study-angular/aio-after.png',
    heroImageAlt: 'Official Angular documentation website final result image on desktop and mobile phone mockups',
    sections: [
      {
        type: 'rich-text',
        kicker: 'Project Summary',
        heading: 'Project summary',
        body: [
          'The goal of this project was to redesign the official Angular website, primarily the technical documentation portion. We needed to provide a developer-focused user experience that emphasized the navigation, exploration and consumption of highly technical content.',
          'Team: Product Owner, Technical Lead, 3 Developers, UX Designer & Engineer (myself).'
        ]
      },
      {
        type: 'rich-text',
        kicker: 'The Challenge',
        heading: 'The challenge',
        body: [
          'Large amounts of technical content and required emphasis on usability and component design surrounding this philosophy. This meant that having an accessible and mobile-friendly experience was a priority.',
          'Angular desired a website refresh to match the buzz and excitement around their newly re-written platform.'
        ]
      },
      {
        type: 'image',
        heading: 'Before the redesign',
        image: '../assets/images/work/case-study-angular/aio-before.png',
        imageAlt: 'Angular documentation website before any design styles were applied',
        caption: 'This is what the project looked like when I onboarded.'
      },
      {
        type: 'rich-text',
        kicker: 'The Solution',
        heading: 'Mockups & concept exploration',
        body: [
          'I provided mockups and element designs with various alternatives. These mockups were used to discuss with the technical team prior to finalizing implementation. Some of the items explored through mockups included the navigation system, the search feature, the table of contents element, and several page layouts such as the marketing and community pages.'
        ]
      },
      {
        type: 'image',
        heading: 'Exploration directions',
        image: '../assets/images/work/case-study-angular/aio-design-dark.png',
        imageAlt: 'Angular documentation website mockups based on a dark black and red theme',
        caption: 'Concept exploration helped align the team on the navigation, hierarchy, and visual direction before implementation.'
      },
      {
        type: 'rich-text',
        heading: 'Design system & branding',
        body: [
          'I developed an on-brand design system that remained within the existing Angular branding style guide. The design system included style specifications for typography, colors (following Google Material Design colors), buttons, callouts and alert information boxes, links, table of content elements, code blocks and text, and more.'
        ]
      },
      {
        type: 'image',
        heading: 'Style guidelines',
        image: '../assets/images/work/case-study-angular/aio-style-guidelines.png',
        imageAlt: 'Official Angular website style guidelines document',
        caption: 'A practical design system grounded in Angular’s branding while supporting technical documentation patterns and accessibility.'
      },
      {
        type: 'rich-text',
        kicker: 'The Results',
        heading: 'The results',
        body: [
          'The angular.io website is currently viewed about 1.5 million times each month!',
          'Although the focus of the project was surrounding the technical portion of the website, the landing page was very important as it established the initial branding experience for the platform. The mockup I designed was very different from the original website and went on to be used in several implementations such as presentations, third party websites, etc. and becoming a staple element for the Angular brand.'
        ]
      },
      {
        type: 'image',
        heading: 'Final result',
        image: '../assets/images/work/case-study-angular/aio-after.png',
        imageAlt: 'Official Angular documentation website final result image on desktop and mobile phone mockups',
        caption: 'The final experience balanced technical clarity with a stronger brand presence for the Angular platform.'
      },
      {
        type: 'rich-text',
        heading: 'Extending the Vision',
        body: [
          'Immersive on-site workshops brought together management, stakeholders, and subject matter experts to understand the existing onboarding experience, goals, desires, and payer complexity.',
        ]
      },
      {
        type: 'image',
        heading: 'Hello World Before',
        image: '../assets/images/work/case-study-angular/angular-helloworld-before.png',
        imageAlt: 'Angular Hello World page before redesign',
        caption: 'The original Hello World page all developers encountered when starting a new Angular project.'
      },
      {
        type: 'image',
        heading: 'Hello World After',
        image: '../assets/images/work/case-study-angular/angular-helloworld-after.png',
        imageAlt: 'Angular Hello World page after redesign',
        caption: 'The redesigned Hello World page providing a clearer and more modern experience for developers.'
      },
      {
        type: 'rich-text',
        heading: 'And More',
        body: [
          'Continued collaboration with the Angular team to extend their brand and experience across a custom brand-aligned icon set, and a reusable deck for presentations.',
        ]
      },
      {
        type: 'image',
        image: '../assets/images/work/case-study-angular/angular-keynote-deck.jpg',
        imageAlt: 'Keynote presentation at NG Conference',
        caption: 'Angular keynote presentation at NG Conference utilizing the brand-aligned deck.'
      },
      {
        type: 'image',
        image: '../assets/images/work/case-study-angular/angular-icons.png',
        imageAlt: 'Angular icon set',
        caption: 'Branded Angular ecosystem icon set.'
      },
      {
        type: 'rich-text',
        kicker: 'Impact',
        heading: 'A rewarding collaboration',
        body: [
          'Working with the Google Angular team was incredibly rewarding - the team was a pleasure to work with and the rigorous Google methodologies taught me a great deal about software development processes and working within a blended team.'
        ]
      }
    ]
  },
  {
    slug: 'cobalt',
    featured: true,
    title: 'Solventum Cobalt Product Design System - Coming Soon',
    summary: 'Rebranding the official Solventum product design system from the ground up.',
    subtitle: '',
    client: '',
    role: 'Product Owner and UX Design Lead',
    tags: ['Design System', 'Rebranding', 'Project Management'],
    heroImage: '../assets/images/work-placeholder.jpeg',
    heroImageAlt: '',
    sections: [
      {
        type: 'rich-text',
        kicker: 'Something exciting is coming',
        heading: 'Coming Soon',
        body: [
          'A story about rebranding, and more.'
        ]
      }
    ]
  },
  {
    slug: 'hartford-huk',
    featured: true,
    title: 'The Hartford HUK Design System - Coming Soon',
    summary: 'Refining the Hartford design system.',
    subtitle: '',
    client: '',
    role: 'Product Owner and UX Design Lead',
    tags: ['Design System', 'Rebranding', 'Project Management'],
    heroImage: '../assets/images/work/case-study-huk/huk-docs-central.png',
    heroImageAlt: '',
    sections: [
      {
        type: 'rich-text',
        kicker: 'Something exciting is coming',
        heading: 'Coming Soon',
        body: [
          'A story about a refresh and formalizing process.'
        ]
      }
    ]
  }
];
