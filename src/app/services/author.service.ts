import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Author} from '../models/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private serviceUrl = 'http://localhost:8080/api/authors';

  constructor(private http: HttpClient) { }

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(this.serviceUrl);
  }
}
