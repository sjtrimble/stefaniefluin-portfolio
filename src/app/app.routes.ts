import { Routes } from '@angular/router';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { CaseStudyPageComponent } from './pages/case-study-page/case-study-page.component';
import { UnlockPageComponent } from './pages/unlock-page/unlock-page.component';
import { withPasswordProtection } from './security/with-password-protection';

export const routes: Routes = [
	{
		path: '',
		component: PortfolioPageComponent
	},
	withPasswordProtection({
		path: 'case-study/:slug',
		component: CaseStudyPageComponent
	}, 'caseStudies'),
	{
		path: 'unlock',
		component: UnlockPageComponent
	}
];
