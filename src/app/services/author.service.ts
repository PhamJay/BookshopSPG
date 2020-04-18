import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Author} from '../models/author';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private serviceUrl = 'http://localhost:8080/api/authors';

  constructor(private http: HttpClient) { }

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(this.serviceUrl);
  }

  updateAuthor(author: Author): Observable<Author[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    const postAuthor = new Author();
    postAuthor.firstname = author.firstname;
    postAuthor.familyname = author.familyname;

    const post = this.http.post<Author[]>(
      this.serviceUrl + '?id=' + author.autnr.toString(),
      JSON.stringify(postAuthor),
      httpOptions).subscribe();
    return this.getAuthors();
  }
}
