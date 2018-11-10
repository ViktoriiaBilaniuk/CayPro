import {Component, OnInit} from '@angular/core';
import {fadeInAnimation} from '../../../../shared/animations/fade-in.animation';
import {MatDialog} from '@angular/material';
import {ProjectCostComponent} from './project-cost/project-cost.component';
import {SnackBarService} from '../../../../core/services/snackbar/snack-bar.service';
import {ActivatedRoute} from '@angular/router';
import {ProjectsService} from '../../../../core/services/projects/projects.service';

@Component({
  selector: 'caypro-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
  animations: [fadeInAnimation],
})
export class ProjectDetailsComponent implements OnInit {

  showContacts = false;
  project;
  myProjectsPage;
  bestCompanies = [];
  generateList;

  constructor(
    public dialog: MatDialog,
    private snackbar: SnackBarService,
    private route: ActivatedRoute,
    private projectService: ProjectsService
  ) { }

  ngOnInit() {
    this.getRouteParams();
  }

  getRouteParams() {
    this.route.params.subscribe(params => {
      this.getProject(params.id);
    });

    this.route.queryParams.subscribe(params => {
      this.myProjectsPage = params.myProjectsPage;
    });
  }

  getProject(id) {
    const projectRef = this.projectService.getProjectById(id);
    projectRef.ref.get().then( (doc) => {
      if (doc.exists) {
        this.project = doc.data();
      } else {
        this.snackbar.show('Sorry, no project!');
      }
    }).catch((error) => {
      this.snackbar.show(error);
    });
  }


  openCostPopup() {
    const dialogRef = this.dialog.open(ProjectCostComponent, {
      width: '600px',
      data: {  }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'show') {
        this.showContacts = true;
      }
    });
  }

  generateBestList() {
    this.generateList = true;

  }

}
