import { TestBed } from '@angular/core/testing';

import { ApartementServiceService } from './apartement-service.service';

describe('ApartementServiceService', () => {
  let service: ApartementServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApartementServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
