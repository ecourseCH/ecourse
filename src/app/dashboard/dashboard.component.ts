import { Component, OnInit } from '@angular/core';
import { Participant } from '../model/participant';
import { ParticipantService } from '../participant.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  participants: Participant[] = [];
 
  constructor(private participantService: ParticipantService) { }
 
  ngOnInit() {
    this.getParticipants();
  }
 
  getParticipants(): void {
    this.participantService.getParticipants()
      .subscribe(participants => this.participants = participants.slice(1, 5));
  }
}