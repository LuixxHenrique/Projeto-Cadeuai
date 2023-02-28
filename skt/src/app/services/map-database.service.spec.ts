import { TestBed } from '@angular/core/testing';

import { MapDatabaseService } from './map-database.service';

describe('MapDatabaseService', () => {
  let service: MapDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    

  });
});
