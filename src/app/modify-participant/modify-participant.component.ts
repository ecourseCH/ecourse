import { Component, OnInit } from '@angular/core';

import {NgForm } from '@angular/forms';

import { Participant } from '../model/participant'

import { ParticipantService } from '../participant.service';

import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-modify-participant',
  templateUrl: './modify-participant.component.html',
  styleUrls: ['./modify-participant.component.css']
})
export class ModifyParticipantComponent implements OnInit {

 participants: Participant[];
 
 modifyParticipant: Participant = new Participant;
 
 test: Observable<any>;
 
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

modify(): void {
  this.participantService.updateParticipant(this.modifyParticipant)
  .subscribe(modifyParticipant => this.modifyParticipant = modifyParticipant);
  
  this.getParticipants();
}

delete(): void {
this.participantService.deleteParticipant(this.modifyParticipant).subscribe(
      error => this.test = error
      );
this.modifyParticipant = new Participant;
this.getParticipants();
}
onChange(newValue){
this.getParticipant(newValue);
}

}
