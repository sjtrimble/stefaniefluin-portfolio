import { Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageWritingComponent } from './pages/page-writing/page-writing.component';
import { CaseStudyPageComponent } from './pages/case-study-page/case-study-page.component';
import { UnlockPageComponent } from './pages/unlock-page/unlock-page.component';
import { withPasswordProtection } from './security/with-password-protection';

export const routes: Routes = [
	{
		path: '',
		component: PageHomeComponent
	},
	{
		path: 'about',
		component: AboutPageComponent
	},
	{
		path: 'writing',
		component: PageWritingComponent
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
