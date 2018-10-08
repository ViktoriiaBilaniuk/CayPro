import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CompanyService} from '../../../../core/services/company/company.service';
import {SnackBarService} from '../../../../core/services/snackbar/snack-bar.service';
import {fadeInAnimation} from '../../../../shared/animations/fade-in.animation';

@Component({
  selector: 'caypro-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss'],
  animations: [fadeInAnimation],
})


export class CompanyDetailsComponent implements OnInit, AfterViewInit {

  company;

  constructor(
    private route: ActivatedRoute,
    private companyService: CompanyService,
    private snackbar: SnackBarService,
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.getRouteParams();
  }

  getRouteParams() {
    this.route.params.subscribe(params => {
      this.getCompany(params.id);
    });
  }

  getCompany(id) {
    const companyRef = this.companyService.getCompanyById(id);
    companyRef.ref.get().then( (com) => {
      if (com.exists) {
        this.company = com.data();
      } else {
        this.snackbar.show('Sorry, no project!');
      }
    }).catch((error) => {
      this.snackbar.show(error);
    });
  }

  get type() {
    switch(this.company.size) {
      case ( this.company.size <= 10): return 'small company';
      case ( this.company.size > 10 && this.company.size < 80): return 'medium company';
      case ( this.company.size > 80): return 'big company';
    }
  }

}
