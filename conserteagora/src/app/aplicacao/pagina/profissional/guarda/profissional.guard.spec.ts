import { TestBed } from '@angular/core/testing';
import { ProfissionalGuard } from './profissional.guard';

describe('ProfissionalService', () => {
  let service: ProfissionalGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfissionalGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
