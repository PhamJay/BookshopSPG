import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {OktaAuthService} from '@okta/okta-angular';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {UnauthorizedComponent} from './components/popups/unauthorized/unauthorized.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AuthorizedComponent} from './components/popups/authorized/authorized.component';

@Injectable({
  providedIn: 'root'
})
export class OktaAuthGuard implements CanActivate {
  constructor(
    private okta: OktaAuthService,
    private router: Router,
    private dialog: MatDialog,
    private snackbar: MatSnackBar) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const authenticated = await this.okta.isAuthenticated();
    if (authenticated) {
      const userClaims = await this.okta.getUser();
      if (userClaims.admin) {
        this.snackbar.openFromComponent(AuthorizedComponent, {duration: 5000, data: userClaims});
        return true;
      } else {
        const dialogRef = this.dialog.open(
          UnauthorizedComponent, {
          data: userClaims.firstname
        });
        return false;
      }
    } else {
      this.okta.loginRedirect(state.url);
      return false;
    }

  }
}
