import { Component, OnInit } from '@angular/core';
import {ProjectsService} from "../../../core/services/projects/projects.service";
import {AuthService} from "../../../core/services/auth/auth.service";

@Component({
  selector: 'caypro-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent implements OnInit {

  projects;

  constructor(public projectService: ProjectsService, private authService: AuthService) { }

  ngOnInit() {
    this.getUserProjects();
  }

  getUserProjects() {

    this.authService.isLoggedIn()
      .subscribe(user => {
        this.projectService.projects
          .subscribe(data => {
            const allProjects = data.slice();
            this.projects = allProjects.filter(project => project.userEmail === user.user.email);
          });
      });


  }

}
