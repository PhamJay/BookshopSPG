import { Injectable } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {AuthorService} from '../services/author.service';
import {Observable} from 'rxjs';
import {Author} from '../models/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorDataSource extends DataSource<any> {
  constructor(private authorService: AuthorService) {
    super();
  }

  connect(): Observable<Author[]> {
    return this.authorService.getAuthors();
  }

  disconnect() {
  }
}
