import { TestBed } from '@angular/core/testing';

import { OktaAuthGuard } from './app.guard';

describe('OktaAuthGuard', () => {
  let guard: OktaAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OktaAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
