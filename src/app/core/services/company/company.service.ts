import { Injectable } from '@angular/core';
import {AngularFirestore} from "angularfire2/firestore";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  companies;

  constructor(private db: AngularFirestore) {
    this.getAllCompanies();
  }

  getAllCompanies() {
    this.companies = this.db.collection('companies').snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      });
  }

  getCompanyById(id) {
    return this.db.collection('companies').doc(id);
  }

  addCompany(company) {
    this.db.collection('companies').add(company)
      .then(data => {
        console.log(data);
      });
  }
}
