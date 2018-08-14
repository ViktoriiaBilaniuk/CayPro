import {Component, OnInit} from '@angular/core';
import {fadeInAnimation} from '../../../../shared/animations/fade-in.animation';

@Component({
  selector: 'caypro-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
  animations: [fadeInAnimation],
})
export class ProjectDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
