import {Inject, Injectable, Input, Optional} from '@angular/core';
import {Observable} from 'rxjs';
import {Author} from '../models/author';
import {BookService} from '../services/book.service';
import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {Book} from '../models/book';
import {DatasourceOptions} from '../models/datasource-options';

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
