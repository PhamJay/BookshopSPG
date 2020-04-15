import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllAuthorsComponent} from './all-authors/all-authors.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  { path: 'authors/all', component: AllAuthorsComponent},
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
