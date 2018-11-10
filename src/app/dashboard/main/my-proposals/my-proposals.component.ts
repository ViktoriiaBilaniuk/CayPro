import { Component, OnInit } from '@angular/core';
import {ProposalService} from "../../../core/services/proposal/proposal.service";
import {Router} from "@angular/router";


@Component({
  selector: 'caypro-my-proposals',
  templateUrl: './my-proposals.component.html',
  styleUrls: ['./my-proposals.component.scss']
})
export class MyProposalsComponent implements OnInit {

  constructor(
    private proposalService: ProposalService,
    private router: Router,
  ) {
    this.proposalService.getAllProposals();
  }

  userProposals;
  incomingProposals;
  sentProposals;

  ngOnInit() {
    this.proposalService.proposals
      .subscribe(
        data => {
          this.incomingProposals = data.filter(proposal => (proposal.toUserEmail));
          this.sentProposals = data.filter(proposal => (proposal.fromUserEmail));
        }
      )

  }

  getDate(d) {
    if (!d) {
      return '---';
    }
    d = new Date(d.seconds * 1000);
    return d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() + " " +
      d.getHours() + ":" + d.getMinutes();
  }

  proposalClick(proposal, type) {
    this.router.navigate(['./dashboard/main/my-proposals', proposal.id],
      {queryParams: {type: type}} );
  }

}
