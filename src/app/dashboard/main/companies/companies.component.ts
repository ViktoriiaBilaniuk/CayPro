import { Component, OnInit } from '@angular/core';
import {CompanyService} from "../../../core/services/company/company.service";

@Component({
  selector: 'caypro-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
  companies;

  constructor(
    public companyService: CompanyService
  ) { }

  ngOnInit() {
    this.companyService.getAllCompanies();
    this.companyService.companies
      .subscribe(data => this.companies = data);
  }

}
