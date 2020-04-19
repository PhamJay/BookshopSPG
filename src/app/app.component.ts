import {Component, OnInit} from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PhamBookshop';
  isAuthenticated: boolean;
  name: string;

  constructor(public oktaAuth: OktaAuthService) {
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    );
  }

  ngOnInit() {
    this.oktaAuth.isAuthenticated().then(async (auth) => {
      this.isAuthenticated = auth;
      const claims = await this.oktaAuth.getUser();
      if (claims) {
        this.name = claims.firstname + ' ' + claims.lastname;
      } else {
        this.name = undefined;
      }
    });
  }

  logout() {
    this.oktaAuth.logout('/');
    this.name = undefined;
  }
}
