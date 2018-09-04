import { Component, OnInit } from '@angular/core';
import {fadeInAnimation} from '../../../../shared/animations/fade-in.animation';

@Component({
  selector: 'caypro-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss'],
  animations: [fadeInAnimation],
})
export class AddProjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
