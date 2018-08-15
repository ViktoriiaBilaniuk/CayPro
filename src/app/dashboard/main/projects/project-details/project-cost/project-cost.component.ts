import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'caypro-project-cost',
  templateUrl: './project-cost.component.html',
  styleUrls: ['./project-cost.component.scss']
})
export class ProjectCostComponent implements OnInit {
  firstPage = true;

  constructor(
    public dialogRef: MatDialogRef<ProjectCostComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
  }

  firstGetContactsClick() {
    this.firstPage = false;
  }

  secondGetContactsClick() {
    this.dialogRef.close('show');
  }

}
