import {Inject, Injectable, Optional} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../models/book';
import {DatasourceOptions} from '../models/datasource-options';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private serviceUrl = 'http://localhost:8080/api/books';

  constructor(private http: HttpClient, @Optional() public options: DatasourceOptions) { }

  getBooks(): Observable<Book[]> {
    if (!this.options) {
      return this.getAllBooks();
    }
    switch (this.options.getBy) {
      case 'author':
        return this.getBookByAutnr(this.options.parameter);
      default:
        return this.getAllBooks();
    }
  }

  private getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.serviceUrl);
  }
  private getBookById(id: string): Observable<Book[]> {
    return this.http.get<Book[]>(this.serviceUrl + '?id=' + id);
  }
  private getBookByAutnr(autnr: string): Observable<Book[]> {
    return this.http.get<Book[]>(this.serviceUrl + '?autnr=' + autnr);
  }
}
