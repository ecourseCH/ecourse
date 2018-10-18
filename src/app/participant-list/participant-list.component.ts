import { Component, OnInit } from '@angular/core';

import { Participant } from '../model/participant'

import { ParticipantService } from '../participant.service';


@Component({
  selector: 'app-participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.css']
})
export class ParticipantListComponent implements OnInit {

 participants: Participant[];
 
  constructor(private participantService: ParticipantService) { }

  ngOnInit() {
  this.getParticipants();
  }
  
getParticipants(): void {
 
  this.participantService.getParticipants()
  .subscribe(participants => this.participants = participants);
}

}
