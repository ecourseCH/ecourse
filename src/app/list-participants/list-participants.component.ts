import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Participant,ParticipantService} from './../participant-service.service'

@Component({
  selector: 'list-participants',
  templateUrl: './list-participants.component.html',
  styleUrls: ['./list-participants.component.css'],
  providers:[ParticipantService]
})
export class ListParticipantsComponent implements OnInit {

  constructor(
    private participantService: ParticipantService,
    private router: Router) { }
  participants = [];

  ngOnInit() {
    this.participantService.getParticipants().then(participants => this.participants =participants);
  }

  clickParticipant(participant: Participant) {
  this.router.navigate(['/participant', participant.id]);
  }



}
