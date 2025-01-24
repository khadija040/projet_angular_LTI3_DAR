import { TestBed } from '@angular/core/testing';

import { SmartphoneServiceService } from './smartphone-service.service';

describe('SmartphoneServiceService', () => {
  let service: SmartphoneServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmartphoneServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
