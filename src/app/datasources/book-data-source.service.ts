import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Author} from '../models/author';
import {BookService} from '../services/book.service';
import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {Book} from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookDataSource extends DataSource<any> {

  constructor(private bookService: BookService) {
    super();
  }

  connect(): Observable<Book[]> {
      return this.bookService.getBooks();
    }

  disconnect(collectionViewer: CollectionViewer): void {
  }
}
