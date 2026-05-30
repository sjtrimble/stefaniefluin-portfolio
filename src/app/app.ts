import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopNavbarComponent } from "./components/top-navbar/top-navbar.component";
import { SiteFooterComponent } from "./components/site-footer/site-footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopNavbarComponent, SiteFooterComponent],
  templateUrl: './app.html'
})
export class App {}
