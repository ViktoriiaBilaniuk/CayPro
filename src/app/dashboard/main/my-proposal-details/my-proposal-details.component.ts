import { Component, OnInit } from '@angular/core';
import {ProposalService} from "../../../core/services/proposal/proposal.service";
import {ActivatedRoute} from "@angular/router";
import {SnackBarService} from "../../../core/services/snackbar/snack-bar.service";
import {ProjectsService} from "../../../core/services/projects/projects.service";
import {CompanyService} from "../../../core/services/company/company.service";

@Component({
  selector: 'caypro-my-proposal-details',
  templateUrl: './my-proposal-details.component.html',
  styleUrls: ['./my-proposal-details.component.scss']
})
export class MyProposalDetailsComponent implements OnInit {

  proposal;
  email = '';
  proposalType;
  project;
  company;

  constructor(
    private proposalService: ProposalService,
    private activatedRoute: ActivatedRoute,
    private snackbar: SnackBarService,
    private projectService: ProjectsService,
    private companyService: CompanyService
    ) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params => {
        this.getProposal(params.id);
      });
    this.activatedRoute.queryParams
      .subscribe(params => {
        this.proposalType = params.type;
      });
  }

  getProposal(id) {
    const ref = this.proposalService.getProposalById(id);
    ref.ref.get().then( (prop) => {
      if (prop.exists) {
        this.proposal = prop.data();
        this.email = this.proposalType === 'inc' ? this.proposal.fromUserEmail: this.proposal.toUserEmail;
        this.proposal.projectId ? this.getProposalProject() : this.getProposalCompany();
      } else {
        this.snackbar.show('Sorry, no proposal!');
      }
    }).catch((error) => {
      this.snackbar.show(error);
    });
  }

  getDate(d) {
    if (!d) {
      return '---';
    }
    d = new Date(d.seconds * 1000);
    return d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() + " " +
      d.getHours() + ":" + d.getMinutes();
  }

  getProposalProject() {
    const projectRef = this.projectService.getProjectById(this.proposal.projectId);
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

  getProposalCompany() {
    const ref = this.companyService.getCompanyById(this.proposal.companyId);
    ref.ref.get().then( (com) => {
      if (com.exists) {
        this.company = com.data();
      } else {
        this.snackbar.show('Sorry, no company!');
      }
    }).catch((error) => {
      this.snackbar.show(error);
    });
  }

  get relation() {
    return this.proposal.projectId ? 'project' : 'company';
  }

  get relationValue() {
    if (this.proposal.projectId) {
      if (!this.project) {
        return;
      } else {
        return this.project.title;
      }
    } else {
      if (!this.company) {
        return;
      } else {
        return this.company.name;
      }
    }
  }

}
