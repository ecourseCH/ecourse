import { Component, OnInit } from '@angular/core';
import {ParticipantService} from './../participant-service.service'

@Component({
  selector: 'list-participants',
  templateUrl: './list-participants.component.html',
  styleUrls: ['./list-participants.component.css'],
  providers:[ParticipantService]
})
export class ListParticipantsComponent implements OnInit {

  constructor(private participantService: ParticipantService) { }
  participants = [];

  ngOnInit() {
    this.participants = this.participantService.getParticipants();
  }



}
