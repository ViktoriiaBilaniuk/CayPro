import {Component, OnInit} from '@angular/core';
import {fadeInAnimation} from '../../../../shared/animations/fade-in.animation';
import {MatDialog} from '@angular/material';
import {ProjectCostComponent} from './project-cost/project-cost.component';

@Component({
  selector: 'caypro-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
  animations: [fadeInAnimation],
})
export class ProjectDetailsComponent implements OnInit {

  showContacts = false;

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
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

}
