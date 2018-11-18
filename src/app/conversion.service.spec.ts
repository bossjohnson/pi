import { TestBed, inject } from '@angular/core/testing';

import { ConversionService } from './conversion.service';

describe('ConversionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConversionService]
    });
  });

  it('should be created', inject([ConversionService], (service: ConversionService) => {
    expect(service).toBeTruthy();
  }));
});
