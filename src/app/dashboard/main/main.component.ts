import { Component, OnInit } from '@angular/core';
import {fadeInAnimation} from '../../shared/animations/fade-in.animation';

@Component({
  selector: 'caypro-main',
  templateUrl: './main.component.html',
  animations: [fadeInAnimation],
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
