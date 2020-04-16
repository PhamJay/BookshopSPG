import { TestBed } from '@angular/core/testing';

import { BookDataSource } from './book-data-source.service';

describe('BookDataSourceService', () => {
  let service: BookDataSource;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookDataSource);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
