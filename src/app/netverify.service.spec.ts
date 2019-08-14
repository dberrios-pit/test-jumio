import { TestBed, inject } from '@angular/core/testing';

import { NetverifyService } from './netverify.service';

describe('NetverifyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NetverifyService]
    });
  });

  it('should be created', inject([NetverifyService], (service: NetverifyService) => {
    expect(service).toBeTruthy();
  }));
});
