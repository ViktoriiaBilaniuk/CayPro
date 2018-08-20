import { Component, OnInit } from '@angular/core';
import {circleAnimation} from '../../shared/animations/circle.animation';

@Component({
  selector: 'caypro-main',
  templateUrl: './main.component.html',
  animations: [circleAnimation],
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
