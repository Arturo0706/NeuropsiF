import { TestBed } from '@angular/core/testing';

import { PatientsServicesService } from './patients-services.service';

describe('PatientsServicesService', () => {
  let service: PatientsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
