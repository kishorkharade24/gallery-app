import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string = '';
  password: string = '';
  errorMsg: string = '';

  constructor(private authService: AuthenticationService,
              private router: Router,
              private alertService: AlertService) { }

  ngOnInit() {
  }

  registerUser() {
    // clear alerts
    this.alertService.clear();

    this.authService.createUser({email: this.email, password: this.password})
      .then(resolve => this.router.navigate(['login']))
      .catch(error => {
        this.errorMsg = error.message;
        this.alertService.error(error.message);
      });
  }
}
