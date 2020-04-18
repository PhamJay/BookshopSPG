import { Component, OnInit } from '@angular/core';
import {BookDataSource} from '../../../datasources/book-data-source.service';
import {BookService} from '../../../services/book.service';
import {Book} from '../../../models/book';

@Component({
  selector: 'app-all-books-editable',
  templateUrl: './all-books-editable.component.html',
  styleUrls: ['./all-books-editable.component.scss']
})
export class AllBooksEditableComponent implements OnInit {

  displayedColumns: string[] = ['isbn', 'autnr', 'title', 'price'];
  bookDataSource = new BookDataSource(this.bookService);

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
  }

  updateBookAutnr(book: Book, input: string) {
    if (input == null) { return; }

    book.autnr = +input;
    this.bookDataSource.update(book);
  }

  updateBookTitle(book: Book, input: string) {
    if (input == null) { return; }

    book.title = input;
    this.bookDataSource.update(book);
  }

  updateBookPrice(book: Book, input: string) {
    if (input == null) { return; }

    book.price = +input;
    this.bookDataSource.update(book);
  }

}
