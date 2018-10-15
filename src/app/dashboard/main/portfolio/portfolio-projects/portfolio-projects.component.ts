import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'caypro-portfolio-projects',
  templateUrl: './portfolio-projects.component.html',
  styleUrls: ['./portfolio-projects.component.scss']
})
export class PortfolioProjectsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PortfolioProjectsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }

  ngOnInit() {
  }

  onProjectSave(project) {
    if (project) {
      this.dialogRef.close(project);
    } else {
      this.dialogRef.close();
    }
  }
}
