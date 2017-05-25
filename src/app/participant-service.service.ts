import { Injectable } from '@angular/core';

@Injectable()
export class ParticipantService {

  constructor() { }

  participants: Participant[] = [

    {id: 1, name:"Luxus"},
    {id: 2, name:"Gallo"},
    {id: 3, name:"Mammut"},
    {id: 4, name:"Snoopy"},
    {id: 5, name:"Prusik"},
    
  ]


  participantsPromise = Promise.resolve(this.participants);
  getParticipants() {
    return this.participantsPromise;
  }

  getParticipant(id: number) {
    console.error('getParticipant ' + id);
    return this.participantsPromise.then(participant => participant.find(p => p.id === +id));
  }

}

export class Participant {
  id: number;
  name: string;
}
