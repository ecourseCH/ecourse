import { Injectable } from '@angular/core';

@Injectable()
export class ParticipantService {

  constructor() { }

  participants: String[] =  [
    "Luxus", "Mammut", "Gallo", "Snoopy", "Prusik"
  ]

  getParticipants(): String[] {
    return this.participants;
  }

}
