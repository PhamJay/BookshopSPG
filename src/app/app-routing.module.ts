import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllAuthorsComponent} from './components/all-authors/all-authors.component';
import {BookCardsComponent} from './components/book-cards/book-cards.component';
import { OktaAuthGuard } from './app.guard';
import {OktaCallbackComponent} from '@okta/okta-angular';
import { LoginComponent } from './components/login/login.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';



const routes: Routes = [
  { path: '', component: BookCardsComponent},
  { path: '**', component: PageNotFoundComponent},
  { path: 'implicit/callback', component: OktaCallbackComponent },
  { path: 'login', component: LoginComponent },
  { path: 'authors', component: AllAuthorsComponent, canActivate: [ OktaAuthGuard ], data: { onAuthRequired }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export function onAuthRequired({ oktaAuth, router }) {
  router.navigate(['/login']);
}
