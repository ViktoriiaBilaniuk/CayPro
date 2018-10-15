import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {SnackBarService} from "../../../../../core/services/snackbar/snack-bar.service";

@Component({
  selector: 'caypro-project-cost',
  templateUrl: './project-cost.component.html',
  styleUrls: ['./project-cost.component.scss']
})
export class ProjectCostComponent implements OnInit {
  description;

  constructor(
    public dialogRef: MatDialogRef<ProjectCostComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackBar: SnackBarService
  ) { }

  ngOnInit() {
  }

  send(){
    this.close();
    this.snackBar.show('Proposal have been sent!');

  }

  close() {
    this.dialogRef.close();
  }

}
