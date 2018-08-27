import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../core/services/auth/auth.service';
import {tap} from 'rxjs/internal/operators';

@Component({
  selector: 'caypro-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
    console.log(this.authService.isLoggedIn());
  }

}
