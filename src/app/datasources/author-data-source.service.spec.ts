import { TestBed } from '@angular/core/testing';

import { AuthorDataSource } from './author-data-source.service';

describe('AuthorDataSourceService', () => {
  let service: AuthorDataSource;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorDataSource);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
