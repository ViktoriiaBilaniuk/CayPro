import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'caypro-circle-button',
  templateUrl: './circle-button.component.html',
  styleUrls: ['./circle-button.component.scss']
})
export class CircleButtonComponent implements OnInit {
  @Input() click;

  constructor() { }

  ngOnInit() {
  }

}
