import { TestBed, inject } from '@angular/core/testing';

import { ConformManagerService } from './conform-manager.service';

describe('ConformManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConformManagerService]
    });
  });

  it('should be created', inject([ConformManagerService], (service: ConformManagerService) => {
    expect(service).toBeTruthy();
  }));
});
