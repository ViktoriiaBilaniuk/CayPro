import { Component, OnInit } from '@angular/core';
import {fadeInAnimation} from '../../../shared/animations/fade-in.animation';
import {ProjectsService} from '../../../core/services/projects/projects.service';

@Component({
  selector: 'caypro-projects',
  templateUrl: './projects.component.html',
  animations: [fadeInAnimation],
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects;

  constructor(public projectService: ProjectsService) { }

  ngOnInit() {
    this.projectService.getAllProjects();
    this.projectService.projects
      .subscribe(data => {
        this.projects = data;
      });
  }
}
