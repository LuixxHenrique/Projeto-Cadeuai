import { TestBed } from '@angular/core/testing';

import { BancoMarcadoService } from './banco-marcado.service';

describe('BancoMarcadoService', () => {
  let service: BancoMarcadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BancoMarcadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
