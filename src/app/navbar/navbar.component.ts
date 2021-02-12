import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  styleHeader = false;
  constructor() {}

  ngOnInit() {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollLocation =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
      console.log(scrollLocation);
    if (scrollLocation > 50) {
      this.styleHeader = true;
    }
    if (scrollLocation < 50) {
      this.styleHeader = false;
    }
  }
}
