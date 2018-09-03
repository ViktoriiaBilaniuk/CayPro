import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../../core/services/auth/auth.service';
import {tap} from 'rxjs/internal/operators';

@Component({
  selector: 'caypro-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  loggData;
  isLoggedInSubscription$;

  constructor(
    public authService: AuthService
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

  ngOnDestroy() {
    this.isLoggedInSubscription$.unsubscribe();
  }

}
