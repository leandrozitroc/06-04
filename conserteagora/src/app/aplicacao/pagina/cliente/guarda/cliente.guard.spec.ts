import { TestBed } from '@angular/core/testing';
import { ClienteGuard } from './cliente.guard';


describe('ClienteService', () => {
  let service: ClienteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienteGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
