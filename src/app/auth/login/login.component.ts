import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../core/services/auth/auth.service';

@Component({
  selector: 'caypro-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.login('vika_bilanjuk@ukr.net', 'techmagic88');
  }

}
