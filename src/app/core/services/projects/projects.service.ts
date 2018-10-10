import { Injectable } from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {SnackBarService} from '../snackbar/snack-bar.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects;

  constructor(
    private db: AngularFirestore,
    private snackBar: SnackBarService,
    private router: Router) {
    this.getAllProjects();
  }

  getAllProjects() {
    this.projects = this.db.collection('projects').snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      });
  }

  getProjectById(id) {
    return this.db.collection('projects').doc(id);
  }

  addProject(project) {
    this.db.collection('projects').add(project)
      .then(data => {
        this.router.navigate(['./dashboard/main/projects']);
        this.snackBar.show('Your project published!');
      });
  }
}
