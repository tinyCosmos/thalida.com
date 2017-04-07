import { Component } from '@angular/core';
import * as _ from 'lodash';

import { Extra, extras } from '../../data/extras.data';
import { Job, jobs } from '../../data/jobs.data';
import { Project, projects } from '../../data/projects.data';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  extras: Extra[];
  jobs: Job[];
  projects: Project[];
  visibleProjects: Project[];
  featuredProject: Project;

  constructor() {
    this.extras = extras;
    this.jobs = jobs;
    this.projects = projects;
    this.visibleProjects = this.projects.filter((project) => !project.hidden);
    this.featuredProject = this.getFeaturedProject(this.projects);
  }

  getFeaturedProject(projects: Project[]) : Project {
    let foundFeaturedProject = <Project>{};
    let featuredProjects = this.projects.filter((project) => project.featured);

    if (featuredProjects.length > 0) {
      foundFeaturedProject = featuredProjects[0];
    }

    return foundFeaturedProject;
  }
}