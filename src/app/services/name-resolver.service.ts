import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class NameResolver implements Resolve<boolean> {

  constructor(public oktaAuth: OktaAuthService) {

  }

  resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.oktaAuth.$authenticationState.do(async data => {
      const claims = await this.oktaAuth.getUser();
      if (claims) {
        return claims.firstname + ' ' + claims.lastname;
      } else {
        return undefined;
      }
    });

  }
}
