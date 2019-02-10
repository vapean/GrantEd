import { TestBed } from '@angular/core/testing';

import { BecasService } from './becas.service';

describe('BecasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BecasService = TestBed.get(BecasService);
    expect(service).toBeTruthy();
  });
});
