import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProjectsService} from '../../../../core/services/projects/projects.service';
import {SnackBarService} from '../../../../core/services/snackbar/snack-bar.service';

@Component({
  selector: 'caypro-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {

  @Input() project;

  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

  detailsClick() {
    this.router.navigate(['../project', this.project.id], { relativeTo: this.route });
  }

}
