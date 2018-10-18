import { TestBed } from '@angular/core/testing';

import { ParticipantTagService } from './participant-tag.service';

describe('ParticipantTagService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParticipantTagService = TestBed.get(ParticipantTagService);
    expect(service).toBeTruthy();
  });
});
