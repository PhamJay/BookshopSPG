import {Component, Inject, Injectable, Input, OnInit, Optional} from '@angular/core';
import {BookService} from '../../../services/book.service';
import {BookDataSource} from '../../../datasources/book-data-source.service';
import {DatasourceOptions} from '../../../models/datasource-options';
import {ActivatedRoute, Router} from '@angular/router';
import {query} from '@angular/animations';
import {Author} from '../../../models/author';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-cards.component.html',
  styleUrls: ['./book-cards.component.scss']
})
export class BookCardsComponent implements OnInit {

  books: any;
  options = new DatasourceOptions();
  authorName: string;

  constructor(private bookService: BookService, private activeRoute: ActivatedRoute, ) {
  }

  ngOnInit(): void {
    // Get Routing Parameters and set to this.{parameter}
    this.activeRoute.queryParams.subscribe(queryParams => {
      this.options.parameter = queryParams.autnr;
      this.authorName = queryParams.authorName;
    });

    // Set the parameters in bookservice if defined , else set to undefined
    if (this.options.parameter !== undefined) {
      this.options.getBy = 'author';
      this.bookService.options = this.options;
    } else {
        this.bookService.options = undefined;
    }

    // if (this.author.fullname === undefined) {
    //   this.author.fullname = undefined;
    // }

    const dataSource = new BookDataSource(this.bookService);
    this.books = dataSource.connect();
  }

}
