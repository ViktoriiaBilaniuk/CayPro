import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../../core/services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'caypro-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  loggData;
  isLoggedInSubscription$;

  constructor(
    public authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.isLoggedInSubscription$ = this.authService.isLoggedIn()
      .subscribe(data => {
        console.log(data);
        this.loggData = data;
      });
  }

  logout() {
    this.authService.logout();
  }

  goToPortfolio() {
    this.router.navigate(['./portfolio']);
  }

  ngOnDestroy() {
    this.isLoggedInSubscription$.unsubscribe();
  }

}
