import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {SnackBarService} from "../../../../../core/services/snackbar/snack-bar.service";
import {ProposalService} from "../../../../../core/services/proposal/proposal.service";
import {AuthService} from "../../../../../core/services/auth/auth.service";

@Component({
  selector: 'caypro-project-cost',
  templateUrl: './project-cost.component.html',
  styleUrls: ['./project-cost.component.scss']
})
export class ProjectCostComponent implements OnInit {
  form = {
    description: '',
    subject: '',
    fromUserEmail: '',
    toUserEmail: ''
  };
  projectId;
  companyId;



  constructor(
    public dialogRef: MatDialogRef<ProjectCostComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackBar: SnackBarService,
    private proposalService: ProposalService,
    private authService: AuthService
  ) {
    if (data.projectId) {
      this.projectId = data.projectId;
    }
    if (data.companyId) {
      this.companyId = data.companyId;
    }
    this.form.toUserEmail = data.toUserEmail;
  }

  ngOnInit() {
  }

  send(){
    this.close();
    this.authService.isLoggedIn()
      .subscribe(user => {
        this.form.fromUserEmail = user.user.email;
        this.proposalService.sendProposal(this.proposal);
        this.snackBar.show('Proposal have been sent!');
      });
  }

  get proposal() {
    if (this.projectId) {
      this.form['projectId'] = this.projectId;
    }
    if (this.companyId) {
      this.form['companyId'] = this.companyId;
    }
    return this.form;
  }

  close() {
    this.dialogRef.close();
  }

}
