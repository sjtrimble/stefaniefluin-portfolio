import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  styleHeader = false;
  sideNavOpen = false;
  screenWidth: number;
  isMobile: boolean;
  hideSocialLinks = false;

  constructor() {}

  toggleNav() {
    this.sideNavOpen = !this.sideNavOpen;
    console.log('toggleNav running | sideNavOpen', this.sideNavOpen);
  }

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth < 769) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
    console.log('the width on init is:', this.screenWidth);
    console.log('isMobile onInit', this.isMobile);
    console.log('sideNavOpen onInit', this.sideNavOpen);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollLocation =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;
    if (scrollLocation > 50) {
      this.styleHeader = true;
    }
    if (scrollLocation < 50) {
      this.styleHeader = false;
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth < 769) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
      this.sideNavOpen = false;
    }
    if (this.screenWidth < 992 && this.screenWidth > 768) {
      this.hideSocialLinks = true;
    } else {
      this.hideSocialLinks = false;
    }
  }
}
