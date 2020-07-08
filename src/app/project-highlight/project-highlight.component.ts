import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-highlight',
  templateUrl: './project-highlight.component.html'
})
export class ProjectHighlightComponent implements OnInit {

  @Input()
  project;

  constructor() { }

  ngOnInit() {
  }

}
