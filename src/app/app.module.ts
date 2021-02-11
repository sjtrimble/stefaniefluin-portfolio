import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ExplorationsComponent } from './explorations/explorations.component';
import { ProjectHighlightComponent } from './project-highlight/project-highlight.component';
import { AngularWebsiteComponent } from './case-studies/angular-website/angular-website.component';
import { SurepayrollOnboardingComponent } from './case-studies/surepayroll-onboarding/surepayroll-onboarding.component';
import { NewsletterComponent } from './newsletter/newsletter.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    WorkComponent,
    NavbarComponent,
    FooterComponent,
    ExplorationsComponent,
    ProjectHighlightComponent,
    AngularWebsiteComponent,
    SurepayrollOnboardingComponent,
    NewsletterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
