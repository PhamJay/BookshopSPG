import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';
import {BookService} from '../../../services/book.service';
import {DatasourceOptions} from '../../../models/datasource-options';
import {BookDataSource} from '../../../datasources/book-data-source.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }
}
