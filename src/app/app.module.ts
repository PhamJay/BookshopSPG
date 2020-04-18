import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { AllAuthorsComponent } from './components/all-authors/all-authors.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { BookCardsComponent } from './components/book-cards/book-cards.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { OktaAuthModule } from '@okta/okta-angular';
import { LoginComponent } from './components/login/login.component';
import {MatIconModule} from '@angular/material/icon';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import { AuthorComponent } from './components/author/author.component';
import { AuthorizedComponent } from './components/authorized/authorized.component';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AdminComponent } from './components/admin/admin.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { SatPopoverModule } from '@ncstate/sat-popover';
import { EditComponent } from './components/edit/edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { AllAuthorsEditableComponent } from './components/all-authors-editable/all-authors-editable.component';

@NgModule({
  declarations: [
    AppComponent,
    AllAuthorsComponent,
    BookCardsComponent,
    LoginComponent,
    UnauthorizedComponent,
    AuthorComponent,
    AuthorizedComponent,
    PageNotFoundComponent,
    AdminComponent,
    EditComponent,
    AllAuthorsEditableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    MatGridListModule,
    MatSidenavModule,
    MatListModule,
    OktaAuthModule.initAuth({
      issuer: 'https://dev-589202.okta.com/oauth2/default',
      redirectUri: 'http://localhost:4200/implicit/callback',
      clientId: '0oa9777ceBCXDcOqC4x6'
    }),
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSnackBarModule,
    MatExpansionModule,
    SatPopoverModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
