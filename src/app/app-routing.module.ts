import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllAuthorsComponent} from './components/all-authors/all-authors.component';
import {HomeComponent} from './components/home/home.component';
import {BookCardsComponent} from './components/book-cards/book-cards.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'authors/all', component: AllAuthorsComponent},
  { path: 'books/all', component: BookCardsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
