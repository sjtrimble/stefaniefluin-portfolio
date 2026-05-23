import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-featured-work',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './featured-work.component.html'
})
export class FeaturedWorkComponent {
  protected readonly projects = [
    {
      slug: 'design-system-migration-01',
      title: 'Global Design System Migration',
      summary:
        'Architected and led the migration of a legacy monolithic UI into a component-driven React architecture, increasing engineering velocity by 40% across 12 product squads.',
      tags: ['Design Systems', 'Migration'],
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBA8bi2snn3d6QtBVIh8EIKdSvLFaYBn-Z_sIcS4wWcKmPRJkkKrxMbnlwUUNLGcFMtvmYrnTkCV_13-tuyL0xsM-DCclOgHjWjNfpFQJRJT1fddYt3f_QR2W25EwZdkY1ZBI42vyf9twCaOHMb31iC4l1IrN-cqd4wfV-0U5GOO-xEHmFdU5nHpfULznYw5Rtxvha6FZbJkf1rE5hkomoEskC8ctaIsJpuGwkta7ApeDn0EdYRpq-VHiudV5N4EnQQXbsUBc1unYk',
      imageAlt: 'Design system migration abstract',
      columnClass: 'col-7'
    },
    {
      slug: 'enterprise-saas-strategy-02',
      title: 'Enterprise SaaS Strategy',
      summary:
        'Redesigned the core analytics workflow for a Fortune 500 compliance tool, simplifying complex data dense views into actionable insights.',
      tags: ['Product Strategy', 'B2B SaaS'],
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBZE_6FHdjTgO1DW6C3__YubHBWn3d-5w-hoGbl-0aN11Z8A5NQZDnUwi468GXXGXNH-9pv-Hro0JqiVetdFlh6Uou9WZOR4b-fZJYkVJ5YHzxCajQy-Dl1wvS5_XYWyFCTmHJNUstL0OVOroYvBkslppBkTeoYqDxL7hK7Ax_ua8FH6th9S82v2XbrNuDOkW6cTNrYlgBk_uiEobnJoFL4cGPV3UHrivZMoiLdOdV8SYhmnu5RqdRD13O_ZAxNH3Z3qEI7HPMBKTs',
      imageAlt: 'Enterprise SaaS dashboard',
      columnClass: 'col-5'
    }
  ];
}
