import { TestBed } from '@angular/core/testing';

import { SusService } from './sus.service';

describe('SusService', () => {
  let service: SusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
