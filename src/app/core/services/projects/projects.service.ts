import { Injectable } from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {map} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects;

  constructor(private db: AngularFirestore) {
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
    console.log(this.projects);
  }

  getProjectById(id) {

    return this.db.collection('projects').doc(id);

  }
}
