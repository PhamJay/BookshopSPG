import { TestBed } from '@angular/core/testing';

import { NameResolverService } from './name-resolver.service';

describe('NameResolverService', () => {
  let service: NameResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NameResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
