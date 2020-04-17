import {Component, Inject, Injectable, Input, OnInit, Optional} from '@angular/core';
import {BookService} from '../../services/book.service';
import {BookDataSource} from '../../datasources/book-data-source.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-cards.component.html',
  styleUrls: ['./book-cards.component.scss']
})
export class BookCardsComponent implements OnInit {

  dataSource = new BookDataSource(this.bookService);
  books = this.dataSource.connect();

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
  }

}
