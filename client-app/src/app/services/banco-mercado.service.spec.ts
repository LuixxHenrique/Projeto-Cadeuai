import { TestBed } from '@angular/core/testing';

import { BancoMercadoService } from './banco-mercado.service';

describe('BancoMercadoService', () => {
  let service: BancoMercadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BancoMercadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
