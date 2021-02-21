import { TestBed } from '@angular/core/testing';

import { CryptoDataServiceService } from './crypto-data-service.service';

describe('CryptoDataServiceService', () => {
  let service: CryptoDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CryptoDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
