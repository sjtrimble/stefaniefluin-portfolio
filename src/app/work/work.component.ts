import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { projectList } from '../shared/projects';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html'
})
export class WorkComponent implements OnInit, OnDestroy {
  projectList = projectList;
  project;
  name: string;
  private sub: any;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.name = params.name;
      this.project = this.projectList.find(project => project.name === this.name);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
