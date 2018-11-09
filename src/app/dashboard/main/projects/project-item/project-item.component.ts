import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'caypro-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {

  @Input() project;
  @Input() myProjectsPage;

  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

  detailsClick() {
    const queryParams = { myProjectsPage: this.myProjectsPage };
    this.router.navigate(['../project', this.project.id],
      {queryParams: queryParams, relativeTo: this.route });
  }

}
