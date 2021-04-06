import { TestBed } from '@angular/core/testing';
import { ProfissionalGuard } from '../../profissional/guarda/profissional.guard';
import { AdministradorGuard } from './administrador.guard';

describe('AdministradorService', () => {
  let service: AdministradorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdministradorGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
