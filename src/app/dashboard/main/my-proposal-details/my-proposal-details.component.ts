import { Component, OnInit } from '@angular/core';
import {ProposalService} from "../../../core/services/proposal/proposal.service";
import {ActivatedRoute} from "@angular/router";
import {SnackBarService} from "../../../core/services/snackbar/snack-bar.service";

@Component({
  selector: 'caypro-my-proposal-details',
  templateUrl: './my-proposal-details.component.html',
  styleUrls: ['./my-proposal-details.component.scss']
})
export class MyProposalDetailsComponent implements OnInit {

  proposal;

  constructor(
    private proposalService: ProposalService,
    private activatedRoute: ActivatedRoute,
    private snackbar: SnackBarService,
    ) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params => {
        this.getProposal(params.id);
      });
  }

  getProposal(id) {
    const ref = this.proposalService.getProposalById(id);
    ref.ref.get().then( (prop) => {
      if (prop.exists) {
        this.proposal = prop.data();
        console.log(this.proposal);
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

}
