import { TestBed } from '@angular/core/testing';

import { HumidDataService } from './humid-data.service';

describe('HumidDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HumidDataService = TestBed.get(HumidDataService);
    expect(service).toBeTruthy();
  });
});
