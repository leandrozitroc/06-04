import { TestBed } from '@angular/core/testing';
import { AutenticacaoGuard } from './autenticacao.guard';


describe('AutenticacaoService', () => {
  let service: AutenticacaoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutenticacaoGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
