import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllAuthorsComponent} from './components/userComponents/all-authors/all-authors.component';
import {BookCardsComponent} from './components/userComponents/book-cards/book-cards.component';
import { OktaAuthGuard } from './app.guard';
import {OktaCallbackComponent} from '@okta/okta-angular';
import {PageNotFoundComponent} from './components/userComponents/page-not-found/page-not-found.component';
import {AuthorComponent} from './components/userComponents/author/author.component';
import {AdminComponent} from './components/adminComponents/admin/admin.component';



const routes: Routes = [
  { path: '', component: BookCardsComponent},
  { path: 'implicit/callback', component: OktaCallbackComponent },
  { path: 'admin', component: AdminComponent, canActivate: [ OktaAuthGuard ], data: { onAuthRequired }},
  { path: 'login', component: BookCardsComponent, canActivate: [ OktaAuthGuard ], data: { onAuthRequired }},
  { path: 'authors', component: AllAuthorsComponent },
  { path: 'authors/author', component: AuthorComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export function onAuthRequired({ oktaAuth, router }) {
  router.navigate(['/login']);
}
