import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CompanyService} from '../../../../core/services/company/company.service';
import {SnackBarService} from '../../../../core/services/snackbar/snack-bar.service';
import {fadeInAnimation} from '../../../../shared/animations/fade-in.animation';
import {SuitableService} from "../../../../core/services/suitable/suitable.service";
import {ProjectCostComponent} from "../../projects/project-details/project-cost/project-cost.component";
import {MatDialog} from "@angular/material";

@Component({
  selector: 'caypro-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss'],
  animations: [fadeInAnimation],
})


export class CompanyDetailsComponent implements OnInit, AfterViewInit {

  company;
  showContacts;
  companyId;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private companyService: CompanyService,
    private snackbar: SnackBarService,
    private suitableService: SuitableService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.getRouteParams();
  }

  getRouteParams() {
    this.route.params.subscribe(params => {
      this.companyId = params.id;
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

  openSuitablePage() {
    this.suitableService.company = this.company;
    this.suitableService.navigateFrom = 'company';
    this.router.navigate(['../../suitable'], {relativeTo: this.route});
  }

  openCostPopup() {
    const dialogRef = this.dialog.open(ProjectCostComponent, {
      width: '600px',
      data: {companyId: this.companyId, toUserEmail: this.company.userEmail}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'show') {
        this.showContacts = true;
      }
    });
  }

}
