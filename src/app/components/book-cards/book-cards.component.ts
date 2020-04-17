import {Component, Inject, Injectable, Input, OnInit, Optional} from '@angular/core';
import {BookService} from '../../services/book.service';
import {BookDataSource} from '../../datasources/book-data-source.service';
import {DatasourceOptions} from '../../models/datasource-options';
import {ActivatedRoute, Router} from '@angular/router';
import {query} from '@angular/animations';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-cards.component.html',
  styleUrls: ['./book-cards.component.scss']
})
export class BookCardsComponent implements OnInit {

  @Input('authorName') name?: string;
  books: any;
  options = new DatasourceOptions();

  constructor(private bookService: BookService, private activeRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(queryParams => {
      console.log(queryParams);
      this.options.parameter = queryParams.autnr;
    });
    if (this.options.parameter !== undefined) {
      this.options.getBy = 'author';
      this.bookService.options = this.options;
    } else {
      this.bookService.options = undefined;
    }
    const dataSource = new BookDataSource(this.bookService);
    this.books = dataSource.connect();
  }

}
