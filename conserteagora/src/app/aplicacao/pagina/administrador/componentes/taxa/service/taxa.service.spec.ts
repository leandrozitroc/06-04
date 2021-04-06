import { TestBed } from '@angular/core/testing';
import { TaxaService } from './taxa.service';

describe('TaxaService', () => {
  let service: TaxaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
