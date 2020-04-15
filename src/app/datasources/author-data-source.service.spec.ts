import { TestBed } from '@angular/core/testing';

import { AuthorDataSourceService } from './author-data-source.service';

describe('AuthorDataSourceService', () => {
  let service: AuthorDataSourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorDataSourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
