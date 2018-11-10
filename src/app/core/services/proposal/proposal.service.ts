import { Injectable } from '@angular/core';
import {AngularFirestore} from "angularfire2/firestore";

@Injectable({
  providedIn: 'root'
})
export class ProposalService {
  proposals;

  constructor(
    private db: AngularFirestore,
  ){}

  getAllProposals() {
    this.proposals = this.db.collection('proposals').snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      });
  }


  sendProposal(proposal) {
    proposal.date = new Date();
    this.db.collection('proposals').add(proposal)
      .then(data => {
        console.log(data);
      });
  }

  getProposalById(id) {
    return this.db.collection('proposals').doc(id);
  }
}
