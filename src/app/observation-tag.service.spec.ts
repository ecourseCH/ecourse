import { TestBed } from '@angular/core/testing';

import { ObservationTagService } from './observation-tag.service';

describe('ObservationTagService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObservationTagService = TestBed.get(ObservationTagService);
    expect(service).toBeTruthy();
  });
});
