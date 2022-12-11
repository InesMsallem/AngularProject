import { TestBed } from '@angular/core/testing';

import { ProjettacheService } from './projettache.service';

describe('ProjettacheService', () => {
  let service: ProjettacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjettacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
