import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { HomeComponent } from './home/home.component';
import { ExplorationsComponent } from './explorations/explorations.component';
import { ProjectHighlightComponent } from './project-highlight/project-highlight.component';
import { SurepayrollOnboardingComponent } from './case-studies/surepayroll-onboarding/surepayroll-onboarding.component';
import { AngularWebsiteComponent } from './case-studies/angular-website/angular-website.component';
import { NewsletterComponent } from './newsletter/newsletter.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'work',
    component: WorkComponent,
  },
  {
    path: 'work/angular-docs',
    component: AngularWebsiteComponent,
  },
  {
    path: 'work/surepayroll-onboarding',
    component: SurepayrollOnboardingComponent,
  },
  // {
  //   path: 'explorations',
  //   component: ExplorationsComponent,
  // },
  {
    path: 'newsletter',
    component: NewsletterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
