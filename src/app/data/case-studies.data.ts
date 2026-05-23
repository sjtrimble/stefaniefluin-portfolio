import { CaseStudy } from '../models/case-study.model';

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'design-system-migration-01',
    title: 'Case Study: Design System Migration',
    subtitle: 'From fragmented UI libraries to one resilient cross-product platform.',
    client: 'Global SaaS Platform',
    timeline: '8 months',
    role: 'Principal UX Designer',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBA8bi2snn3d6QtBVIh8EIKdSvLFaYBn-Z_sIcS4wWcKmPRJkkKrxMbnlwUUNLGcFMtvmYrnTkCV_13-tuyL0xsM-DCclOgHjWjNfpFQJRJT1fddYt3f_QR2W25EwZdkY1ZBI42vyf9twCaOHMb31iC4l1IrN-cqd4wfV-0U5GOO-xEHmFdU5nHpfULznYw5Rtxvha6FZbJkf1rE5hkomoEskC8ctaIsJpuGwkta7ApeDn0EdYRpq-VHiudV5N4EnQQXbsUBc1unYk',
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
    slug: 'enterprise-saas-strategy-02',
    title: 'Case Study: Enterprise SaaS Strategy',
    subtitle: 'Simplifying complex compliance analytics into clear decision workflows.',
    client: 'Fortune 500 Compliance',
    timeline: '6 months',
    role: 'Design Systems Lead',
    heroImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBZE_6FHdjTgO1DW6C3__YubHBWn3d-5w-hoGbl-0aN11Z8A5NQZDnUwi468GXXGXNH-9pv-Hro0JqiVetdFlh6Uou9WZOR4b-fZJYkVJ5YHzxCajQy-Dl1wvS5_XYWyFCTmHJNUstL0OVOroYvBkslppBkTeoYqDxL7hK7Ax_ua8FH6th9S82v2XbrNuDOkW6cTNrYlgBk_uiEobnJoFL4cGPV3UHrivZMoiLdOdV8SYhmnu5RqdRD13O_ZAxNH3Z3qEI7HPMBKTs',
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
