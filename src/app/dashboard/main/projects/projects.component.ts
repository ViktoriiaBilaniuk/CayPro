import { Component, OnInit } from '@angular/core';
import {fadeInAnimation} from '../../../shared/animations/fade-in.animation';

@Component({
  selector: 'caypro-projects',
  templateUrl: './projects.component.html',
  animations: [fadeInAnimation],
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
