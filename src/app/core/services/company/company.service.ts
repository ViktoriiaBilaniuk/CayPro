import { Injectable } from '@angular/core';
import {AngularFirestore} from "angularfire2/firestore";
import {SnackBarService} from '../snackbar/snack-bar.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  companies;

  constructor(
    private db: AngularFirestore,
    private router: Router,
    private snackBar: SnackBarService) {
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
        this.router.navigate(['./dashboard/main/projects']);
        this.snackBar.show('Your portfolio added!');
      }, (err => {
        this.snackBar.show(err);
      }));
  }
}
