import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private serviceUrl = 'http://localhost:8080/api/books';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.serviceUrl);
  }
  getBookById(id: string): Observable<Book[]> {
    return this.http.get<Book[]>(this.serviceUrl + '?id=' + id);
  }
  getBookByBook(autnr: number): Observable<Book[]> {
    return this.http.get<Book[]>(this.serviceUrl + '?autnr=' + autnr);
  }
}
