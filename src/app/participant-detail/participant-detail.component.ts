import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {ParticipantService, Participant} from '../participant-service.service'
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'participant-detail',
  templateUrl: './participant-detail.component.html',
  styleUrls: ['./participant-detail.component.css'],
  providers: [ParticipantService]
})
export class ParticipantDetailComponent implements OnInit {

  participant: Participant;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private participantService: ParticipantService) {}

  ngOnInit() {
      this.route.params
    // (+) converts string 'id' to a number
    .switchMap((params: Params) => this.participantService.getParticipant(+params['id']))
    .subscribe((partic: Participant) => this.participant = partic);
  }

  test(params: Params) : void {

  }

}
