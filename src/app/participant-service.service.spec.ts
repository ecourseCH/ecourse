import { TestBed, inject } from '@angular/core/testing';

import { ParticipantService } from './participant-service.service';

describe('ParticipantServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParticipantService]
    });
  });

  it('should ...', inject([ParticipantService], (service: ParticipantService) => {
    expect(service).toBeTruthy();
  }));
});
