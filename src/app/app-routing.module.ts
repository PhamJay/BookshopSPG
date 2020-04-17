import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllAuthorsComponent} from './components/all-authors/all-authors.component';
import {HomeComponent} from './components/home/home.component';
import {BookCardsComponent} from './components/book-cards/book-cards.component';
import { OktaAuthGuard } from './app.guard';
import {OktaCallbackComponent} from '@okta/okta-angular';
import { LoginComponent } from './components/login/login.component';



const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'implicit/callback', component: OktaCallbackComponent },
  { path: 'login', component: LoginComponent },
  { path: 'authors/all', component: AllAuthorsComponent, canActivate: [ OktaAuthGuard ], data: { onAuthRequired }},
  { path: 'books/all', component: BookCardsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export function onAuthRequired({ oktaAuth, router }) {
  router.navigate(['/login']);
}
