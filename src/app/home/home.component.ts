import { Component, OnInit } from '@angular/core';
import { projectList } from '../project-highlight/projects';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
projectList = projectList;
  constructor() { }

  ngOnInit() {
  }

}
