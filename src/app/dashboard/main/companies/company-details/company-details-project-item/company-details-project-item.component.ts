import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'caypro-company-details-project-item',
  templateUrl: './company-details-project-item.component.html',
  styleUrls: ['./company-details-project-item.component.scss']
})
export class CompanyDetailsProjectItemComponent implements OnInit {
  @Input() project;
  showContent = false;

  constructor() { }

  ngOnInit() {
  }

}
