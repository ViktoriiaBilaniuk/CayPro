import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'caypro-company-item',
  templateUrl: './company-item.component.html',
  styleUrls: ['./company-item.component.scss']
})
export class CompanyItemComponent implements OnInit {
  @Input() company;
  @Input() isSuitablePage;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
  }

  detailsClick() {
    this.router.navigate(['./dashboard/main/company', this.company.id] );
  }

}
