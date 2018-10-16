import { TestBed, inject } from '@angular/core/testing';

import { SuitableService } from './suitable.service';

describe('SuitableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuitableService]
    });
  });

  it('should be created', inject([SuitableService], (service: SuitableService) => {
    expect(service).toBeTruthy();
  }));
});
