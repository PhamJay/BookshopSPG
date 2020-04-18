import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {merge, Observable, of} from 'rxjs';
import {AuthorService} from '../../../services/author.service';
import {Author} from '../../../models/author';
import {DataSource} from '@angular/cdk/collections';
import {AuthorDataSource} from '../../../datasources/author-data-source.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-all-authors',
  templateUrl: './all-authors.component.html',
  styleUrls: ['./all-authors.component.scss']
})
export class AllAuthorsComponent implements OnInit {

  displayedColumns: string[] = ['autnr', 'firstname', 'familyname'];
  dataSource = new AuthorDataSource(this.authorService);
  constructor(private authorService: AuthorService, private router: Router) {
  }

  ngOnInit() {

  }

  onRowClicked(row) {
    this.router.navigate(
      ['/authors/author'],
        { queryParams: {
          autnr: row.autnr.toString(),
          authorName: row.firstname + ' ' + row.familyname
        }
      }
    );
  }
}

