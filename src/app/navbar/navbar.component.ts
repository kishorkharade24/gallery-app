import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title: string = 'Gallery';
  user: Observable<firebase.User>;

  constructor(private authService: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
    this.user = this.authService.authUser();
  }

  logOut() {
    this.authService.logout()
      .then(resolve => {
        this.router.navigate(['/']);
      });
  }

}
