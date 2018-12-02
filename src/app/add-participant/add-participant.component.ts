import { Component, OnInit } from '@angular/core';

import { Participant } from '../model/participant'

import { ParticipantService } from '../participant.service';

@Component({
  selector: 'app-add-participant',
  templateUrl: './add-participant.component.html',
  styleUrls: ['./add-participant.component.css']
})
export class AddParticipantComponent implements OnInit {
  
  addParticipant: Participant = new Participant;
  
  constructor(private participantService: ParticipantService) { }

  ngOnInit() {
  }
  
  
  add(){

 /* this.participantService.addParticipant(this.addParticipant);*/
  
   this.participantService.addParticipant(this.addParticipant)
  .subscribe(participants => this.addParticipant = participants);
  }
}

