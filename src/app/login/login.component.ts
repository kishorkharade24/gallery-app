import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { AlertService } from '../services/alert.service';
import {error} from "util";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMsg: string = '';

  constructor(private authService: AuthenticationService,
              private router: Router,
              private alertService: AlertService) { }

  signIn() {
    // clear alerts
    this.alertService.clear();

    this.authService.login({email: this.email, password: this.password})
      .then(resolve => this.router.navigate(['gallery']))
      .catch(error => {
        this.errorMsg = error.message;
        this.alertService.error(error.message);
      });
  }
}
