import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../../core/services/auth/auth.service';
import {SnackBarService} from '../../core/services/snackbar/snack-bar.service';
import {Router, RouterEvent} from '@angular/router';

@Component({
  selector: 'caypro-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('wrapper') wrapper: ElementRef;
  loginData = {
    email: '',
    password: ''
  };

  registerData = {
    email: '',
    password: ''
  };

  constructor(
    private auth: AuthService,
    private snackBarService: SnackBarService,
    private router: Router) { }

  ngOnInit() {
  }

  buttonClick() {
    this.wrapper.nativeElement.classList.toggle('log-in');
  }

  login() {
    this.auth.login(this.loginData.email, this.loginData.password)
      .subscribe(data => {
        this.auth.loggedUser = data.user;
        this.auth.userLogged = true;
        this.wrapper.nativeElement.classList.toggle('active');
        setTimeout(() => {
          this.router.navigate(['../../dashboard']);
        }, 1500);
      }, (error) => {
        this.snackBarService.show(error);
      }
    );
  }

  signUp() {
    this.auth.signUp(this.registerData.email, this.registerData.password)
      .subscribe(data => {
          this.wrapper.nativeElement.classList.toggle('active');
          setTimeout(() => {
            this.wrapper.nativeElement.classList.toggle('active');
            this.wrapper.nativeElement.classList.toggle('log-in');
          }, 1500);
      }, (error) => {
        this.snackBarService.show(error);
        }
      );
  }

}
