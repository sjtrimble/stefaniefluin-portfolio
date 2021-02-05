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
    children: [
      {
        path: 'angular-docs',
        component: AngularWebsiteComponent,
      },
      {
        path: 'surepayroll-onboarding',
        component: SurepayrollOnboardingComponent,
      },
    ],
  },
  // {
  //   path: 'work/:name',
  //   component: WorkComponent
  // },
  {
    path: 'explorations',
    component: ExplorationsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
