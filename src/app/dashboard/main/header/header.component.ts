import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../core/services/auth/auth.service';
import {tap} from 'rxjs/internal/operators';

@Component({
  selector: 'caypro-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loggData;

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.isLoggedIn()
      .subscribe(data => {
        console.log(data);
        this.loggData = data;
      });
  }

}
