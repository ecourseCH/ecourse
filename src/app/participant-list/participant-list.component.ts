import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Participant } from '../model/participant'

import { ParticipantService } from '../participant.service';


@Component({
  selector: 'app-participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.css']
})
export class ParticipantListComponent implements OnInit {

 participants: Participant[];
 
  constructor(private router: Router,private participantService: ParticipantService) { }

  ngOnInit() {
  this.getParticipants();
  }
  
getParticipants(): void {
 
  this.participantService.getParticipants()
  .subscribe(participants => this.participants = participants);
}

 goToParticipant( id: number){
 	this.router.navigate(["/participant/".concat(id.toString())]);
 }


}
