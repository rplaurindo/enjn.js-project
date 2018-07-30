import { TestBed, inject } from '@angular/core/testing';

import { EnjnService } from './enjn.service';

describe('EnjnService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnjnService]
    });
  });

  it('should be created', inject([EnjnService], (service: EnjnService) => {
    expect(service).toBeTruthy();
  }));
});
