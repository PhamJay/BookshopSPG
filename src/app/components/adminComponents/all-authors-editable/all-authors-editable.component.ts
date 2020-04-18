import { Component, OnInit } from '@angular/core';
import {AuthorDataSource} from '../../../datasources/author-data-source.service';
import {AuthorService} from '../../../services/author.service';
import {Author} from '../../../models/author';

@Component({
  selector: 'app-all-authors-editable',
  templateUrl: './all-authors-editable.component.html',
  styleUrls: ['./all-authors-editable.component.scss']
})
export class AllAuthorsEditableComponent implements OnInit {

  displayedColumns: string[] = ['autnr', 'firstname', 'familyname'];
  authorDataSource = new AuthorDataSource(this.authorService);

  constructor(private authorService: AuthorService) {
  }

  ngOnInit(): void {
  }

  updateAuthorFirstname(author: Author, input: string) {
    if (input == null) { return; }

    author.firstname = input;
    this.authorDataSource.update(author);
  }

  updateAuthorFamilyname(author: Author, input: string) {
    if (input == null) { return; }

    author.familyname = input;
    this.authorDataSource.update(author);
  }

}
