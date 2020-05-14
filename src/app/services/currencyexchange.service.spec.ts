import { TestBed } from '@angular/core/testing';

import { CurrencyexchangeService } from './currencyexchange.service';

describe('CurrencyexchangeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrencyexchangeService = TestBed.get(CurrencyexchangeService);
    expect(service).toBeTruthy();
  });
});
