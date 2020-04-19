import { TestBed } from '@angular/core/testing';

import { OrderDataSourceService } from './order-data-source.service';

describe('OrderDataSourceService', () => {
  let service: OrderDataSourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderDataSourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
