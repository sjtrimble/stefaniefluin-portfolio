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
        kicker: 'Context',
        heading: 'The challenge',
        body: [
          'Twelve product squads shipped UI independently, creating visual drift and duplicated engineering effort.',
          'I led a migration strategy that aligned design, engineering, and product operations under a shared token and component architecture.'
        ]
      },
      {
        type: 'metrics',
        heading: 'Impact',
        items: [
          {
            label: 'Velocity',
            value: '+40%',
            detail: 'Increase in feature delivery speed after component consolidation.'
          },
          {
            label: 'UI Bugs',
            value: '-32%',
            detail: 'Reduction in production regressions linked to interface inconsistency.'
          },
          {
            label: 'Adoption',
            value: '12 squads',
            detail: 'Design system adopted across every active product team.'
          }
        ]
      },
      {
        type: 'image',
        heading: 'System architecture snapshot',
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuBZE_6FHdjTgO1DW6C3__YubHBWn3d-5w-hoGbl-0aN11Z8A5NQZDnUwi468GXXGXNH-9pv-Hro0JqiVetdFlh6Uou9WZOR4b-fZJYkVJ5YHzxCajQy-Dl1wvS5_XYWyFCTmHJNUstL0OVOroYvBkslppBkTeoYqDxL7hK7Ax_ua8FH6th9S82v2XbrNuDOkW6cTNrYlgBk_uiEobnJoFL4cGPV3UHrivZMoiLdOdV8SYhmnu5RqdRD13O_ZAxNH3Z3qEI7HPMBKTs',
        imageAlt: 'Dashboard and component system visual',
        caption: 'A modularized dashboard shell built on shared foundations and semantic tokens.'
      },
      {
        type: 'rich-text',
        kicker: 'Execution',
        heading: 'How we made adoption inevitable',
        body: [
          'We started with critical workflows and built an incremental migration path with codemods and Storybook documentation.',
          'Each release included measurable quality gates, which turned design consistency into an operational KPI rather than a visual preference.'
        ]
      }
    ]
  },
  {
    slug: 'angular',
    featured: true,
    title: 'Official Angular Website & More',
    summary:
      'An easy-to-use website tailored to a technical user base.',
    subtitle: 'Making technical content accessible and user-friendly.',
    client: 'Angular @Google',
    role: 'UX Design Lead and UX Engineer',
    tags: ['UX Design', 'Technical Documentation', 'Onboarding'],
    heroImage:
      '../assets/images/work/case-study-angular/aio-after.png',
    heroImageAlt: 'Enterprise SaaS analytics visual',
    sections: [
      {
        type: 'rich-text',
        heading: 'Overview',
        body: [
          'This template entry exists to demonstrate a scalable suffix-based slug and reusable section composition.',
          'Duplicate this object and update content to publish additional case studies without creating new page components.'
        ]
      }
    ]
  }
];
