import { TestBed } from '@angular/core/testing';

import { NameResolver } from './name-resolver.service';

describe('NameResolver', () => {
  let service: NameResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NameResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
