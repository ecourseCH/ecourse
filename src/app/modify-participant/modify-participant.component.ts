import { Component, OnInit } from '@angular/core';

import {ngForm } from '@angular/forms';

import { Participant } from '../model/participant'

import { ParticipantService } from '../participant.service';

@Component({
  selector: 'app-modify-participant',
  templateUrl: './modify-participant.component.html',
  styleUrls: ['./modify-participant.component.css']
})
export class ModifyParticipantComponent implements OnInit {

 participants: Participant[];
 
 modifyParticipant: Participant;
 
  constructor(private participantService: ParticipantService) { }

  ngOnInit() {
  this.getParticipants();
  }
  
getParticipant(Id){
 this.participantService.getParticipant(Id)
  .subscribe(modifyParticipant => this.modifyParticipant = modifyParticipant);
}
  
getParticipants(): void {
 
  this.participantService.getParticipants()
  .subscribe(participants => this.participants = participants);
}

}
